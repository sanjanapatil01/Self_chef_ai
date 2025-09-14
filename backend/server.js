import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/get-recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Suggest a recipe using these ingredients: ${ingredients}.
    Return in this format:
    Recipe Name: ...
    Steps:
    1. ...
    2. ...
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Extract name + steps
    const lines = text.split("\n").filter(l => l.trim() !== "");
    const recipeName = lines[0].replace("Recipe Name:", "").trim();
    const recipeSteps = lines.slice(1).join("\n");

    // YouTube search link
    const youtubeLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(recipeName)}`;

    res.json({ recipeName, recipeSteps, youtubeLink });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));

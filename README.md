# 🍳 Self Chef AI – Recipe Generator

An AI-powered recipe generator built with **MERN stack** and **Gemini API**.  
Users can type the ingredients they have, and the app will generate:
- ✅ A recipe name  
- ✅ Step-by-step cooking instructions  
- ✅ A YouTube link to watch how it’s made  

---


## 🛠️ Tech Stack
- **Frontend:** React (recipe-frontend)  
- **Backend:** Node.js + Express (backend)  
- **AI Model:** Gemini API (`@google/generative-ai`)  
- **YouTube Integration:** Direct search link  

---

## ✨ Features
- Enter ingredients and get instant recipe suggestions  
- Clear recipe name and steps  
- Direct YouTube video recommendation for the recipe  
- Two-page navigation (Home → Recipe Generator)  

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/sanjanapatil01/Self_chef_ai.git
cd Self-chef-ai

````

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside **backend** folder:

```
GEMINI_API_KEY=your_api_key_here
```

Run the backend:

```bash
node server.js
```

Backend runs on 👉 `http://localhost:5000`

---

### 3. Frontend Setup

Open another terminal:

```bash
cd recipe-frontend
npm install
npm start
```

Frontend runs on 👉 `http://localhost:3000`

---

## 📌 How It Works

1. Start on the **Home Page** → Click **Start**
2. Go to **Recipe Generator** page
3. Enter ingredients (e.g., `tomato, onion, garlic, rice`)
4. AI generates:

   * Recipe Name
   * Cooking Steps
   * YouTube link



## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.



```

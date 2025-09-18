// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import RecipeGenerator from "./pages/RecipeGenerator";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/recipe" element={<RecipeGenerator />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Auto-rotating testimonials component
  const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
    const testimonials = [
      {
        id: 1,
        name: "Sarah M.",
        emoji: "👩‍🦱",
        rating: 5,
        text: "Amazing! I had random ingredients and got a restaurant-quality pasta recipe!",
        location: "New York",
        timeAgo: "2 days ago"
      },
      {
        id: 2,
        name: "Mike R.",
        emoji: "👨‍💼",
        rating: 5,
        text: "Perfect for busy weeknights. Quick recipes with ingredients I already have!",
        location: "California",
        timeAgo: "1 week ago"
      },
      {
        id: 3,
        name: "Emma T.",
        emoji: "👵",
        rating: 5,
        text: "The video tutorials are so helpful! I'm cooking dishes I never thought I could make.",
        location: "Texas",
        timeAgo: "3 days ago"
      },
      {
        id: 4,
        name: "David L.",
        emoji: "👨‍🍳",
        rating: 5,
        text: "As a professional chef, I'm impressed by the quality of recipes this AI generates!",
        location: "London",
        timeAgo: "5 days ago"
      },
      {
        id: 5,
        name: "Maria G.",
        emoji: "👩‍💻",
        rating: 4,
        text: "Love how it considers my dietary restrictions. Gluten-free cooking made easy!",
        location: "Barcelona",
        timeAgo: "1 day ago"
      },
      {
        id: 6,
        name: "James K.",
        emoji: "👨‍🎓",
        rating: 5,
        text: "College student here - this saves me so much money by using leftover ingredients!",
        location: "Boston",
        timeAgo: "6 hours ago"
      },
      {
        id: 7,
        name: "Lisa W.",
        emoji: "👩‍⚕️",
        rating: 5,
        text: "The nutrition information is spot-on. Perfect for my family's health goals!",
        location: "Chicago",
        timeAgo: "4 days ago"
      },
      {
        id: 8,
        name: "Carlos R.",
        emoji: "👨‍🔧",
        rating: 5,
        text: "Even my picky kids love the recipes! Family dinners are fun again.",
        location: "Mexico City",
        timeAgo: "2 days ago"
      }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    const currentReview = testimonials[currentTestimonial];
    const stars = "⭐".repeat(currentReview.rating);

    return (
      <section style={styles.testimonialsSection}>
        <div style={styles.container}>
          <h3 style={styles.sectionTitle}>What Our Users Say 💬</h3>
          <p style={styles.sectionSubtitle}>Real feedback from our amazing community</p>
          
          {/* Featured Auto-Rotating Review */}
          <div style={styles.featuredReviewContainer}>
            <div style={styles.featuredReview}>
              <div style={styles.reviewHeader}>
                <div style={styles.userInfo}>
                  <span style={styles.userEmoji}>{currentReview.emoji}</span>
                  <div>
                    <h5 style={styles.userName}>{currentReview.name}</h5>
                    <div style={styles.rating}>{stars}</div>
                    <div style={styles.userLocation}>{currentReview.location} • {currentReview.timeAgo}</div>
                  </div>
                </div>
                <div style={styles.quoteIcon}>❝</div>
              </div>
              <p style={styles.reviewText}>"{currentReview.text}"</p>
              
              {/* Progress indicators */}
              <div style={styles.progressContainer}>
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.progressDot,
                      ...(index === currentTestimonial ? styles.activeDot : {})
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Recent Reviews Grid */}
          <div style={styles.reviewsGrid}>
            {testimonials.slice(0, 3).map((review, index) => (
              <div 
                key={review.id} 
                style={{
                  ...styles.reviewCard,
                  ...(index === currentTestimonial % 3 ? styles.highlightedCard : {})
                }}
              >
                <div style={styles.cardHeader}>
                  <span style={styles.cardEmoji}>{review.emoji}</span>
                  <div>
                    <h5 style={styles.cardName}>{review.name}</h5>
                    <div style={styles.cardRating}>{"⭐".repeat(review.rating)}</div>
                    <div style={styles.cardTime}>{review.timeAgo}</div>
                  </div>
                </div>
                <p style={styles.cardText}>"{review.text}"</p>
              </div>
            ))}
          </div>

          {/* Live Feed Simulation */}
          <div style={styles.liveFeedContainer}>
            <div style={styles.liveFeed}>
              <div style={styles.liveIndicator}></div>
              Live: {Math.floor(Math.random() * 50) + 10} people are cooking right now!
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Home = () => (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.logo}>Self Chef AI 🍳</h1>
          <p style={styles.tagline}>Your Personal AI Cooking Assistant</p>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            {/* Left Content */}
            <div style={styles.heroLeft}>
              <h2 style={styles.heroTitle}>
                Cook Like a <span style={styles.highlight}>Pro Chef</span> 
                <br />with AI Magic! ✨
              </h2>
              <p style={styles.heroDescription}>
                Transform your available ingredients into amazing recipes instantly! 
                Our AI chef analyzes what you have and creates personalized recipes 
                with step-by-step instructions and video tutorials.
              </p>
              
              <div style={styles.heroButtons}>
                <button
                  onClick={() => setCurrentPage('recipe')}
                  style={styles.primaryButton}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#0284c7';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#0ea5e9';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  🚀 Start Cooking Now
                </button>
                <button 
                  style={styles.secondaryButton}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f0f9ff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  📖 Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div style={styles.heroRight}>
              <div style={styles.heroImageContainer}>
                <div style={styles.heroImage}>
                  <div style={styles.chefIcon}>
                    <div style={styles.chefEmoji}>👨‍🍳</div>
                    <div style={styles.cookingEmojis}>🍳✨</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.container}>
          <h3 style={styles.sectionTitle}>Why Choose Self Chef AI? 🌟</h3>
          
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🧠</div>
              <h4 style={styles.featureTitle}>Smart AI Analysis</h4>
              <p style={styles.featureDescription}>Our advanced AI understands your ingredients and dietary preferences to suggest perfect recipes.</p>
            </div>
            
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📺</div>
              <h4 style={styles.featureTitle}>Video Tutorials</h4>
              <p style={styles.featureDescription}>Watch step-by-step cooking videos to master every recipe like a professional chef.</p>
            </div>
            
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>⚡</div>
              <h4 style={styles.featureTitle}>Instant Results</h4>
              <p style={styles.featureDescription}>Get personalized recipes in seconds. No more wondering what to cook with your ingredients!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Stats Section */}
      <section style={styles.stats}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>10,000+</div>
              <div style={styles.statLabel}>Recipes Generated</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>5,000+</div>
              <div style={styles.statLabel}>Happy Users</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>4.9/5</div>
              <div style={styles.statLabel}>Average Rating</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>AI Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.container}>
          <div style={styles.ctaContent}>
            <h3 style={styles.ctaTitle}>Ready to Transform Your Cooking? 👨‍🍳</h3>
            <p style={styles.ctaDescription}>
              Join thousands of home cooks who have discovered the joy of AI-powered cooking. 
              Start your culinary adventure today!
            </p>
            <button
              onClick={() => setCurrentPage('recipe')}
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'scale(1)';
              }}
            >
              🍽️ Generate My First Recipe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <p style={styles.footerTitle}>Self Chef AI 🤖</p>
            <p style={styles.footerSubtitle}>Making cooking accessible, fun, and delicious for everyone!</p>
            <div style={styles.footerEmojis}>
              <span>👨‍🍳</span>
              <span>🍳</span>
              <span>🥘</span>
              <span>🍰</span>
              <span>🥗</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  const RecipeGenerator = () => {
    const [ingredients, setIngredients] = useState("");
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);

    const getRecipe = async () => {
      if (!ingredients.trim()) {
        alert("Please enter some ingredients first!");
        return;
      }

      setLoading(true);

try {
  const response = await fetch("http://localhost:5000/api/get-recipe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients }),
  });

  const data = await response.json();
  setRecipe(data);
} catch (error) {
  console.error("Error fetching recipe:", error);
  alert("Something went wrong while fetching the recipe. Please try again!");
} finally {
  setLoading(false);
}

    };

    return (
      <div style={styles.recipeApp} id="chef">
        {/* Header */}
        <header style={styles.recipeHeader}>
          <div style={styles.container}>
            <div style={styles.recipeHeaderContent}>
              <div style={styles.recipeNavigation}>
                <button 
                  onClick={() => setCurrentPage('home')}
                  style={styles.backButton}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  }}
                >
                  ← Back
                </button>
                <div>
                  <h1 style={styles.recipeTitle}>Self Chef AI Recipe Generator 🍳</h1>
                  <p style={styles.recipeSubtitle}>Turn your ingredients into culinary masterpieces</p>
                </div>
              </div>
              <div style={styles.headerChef}>👨‍🍳</div>
            </div>
          </div>
        </header>

        <div style={styles.recipeContainer}>
          <div style={styles.recipeContent}>
            {/* Main Recipe Generator */}
            <div style={styles.recipeCard}>
              <div style={styles.recipeIntro}>
                <div style={styles.recipeChefIcon}>🧑‍🍳</div>
                <h2 style={styles.recipeCardTitle}>What's in Your Kitchen?</h2>
                <p style={styles.recipeCardDescription}>
                  Enter the ingredients you have available, and let our AI chef create something amazing!
                </p>
              </div>

              <div style={styles.recipeInputContainer}>
                <div style={styles.inputWrapper}>
                  <input
                    type="text"
                    placeholder="e.g., chicken, tomatoes, onions, garlic..."
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    style={styles.ingredientInput}
                    onKeyPress={(e) => e.key === 'Enter' && getRecipe()}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#0ea5e9';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e0f2fe';
                    }}
                  />
                  <div style={styles.inputIcon}>🥕</div>
                </div>

                <button
                  onClick={getRecipe}
                  disabled={loading}
                  style={{
                    ...styles.generateButton,
                    ...(loading ? styles.disabledButton : {})
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.background = 'linear-gradient(90deg, #0284c7 0%, #0369a1 100%)';
                      e.target.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.background = 'linear-gradient(90deg, #0ea5e9 0%, #0284c7 100%)';
                      e.target.style.transform = 'scale(1)';
                    }
                  }}
                >
                  {loading ? (
                    <div style={styles.loadingContent}>
                      <div style={styles.spinner}></div>
                      Creating Your Recipe...
                    </div>
                  ) : (
                    "🎯 Generate Recipe"
                  )}
                </button>
              </div>

              {/* Recipe Display */}
              {recipe && (
                <div style={styles.recipeDisplay}>
                  <div style={styles.recipeDisplayHeader}>
                    <div style={styles.recipeIcon}>🍽️</div>
                    <h3 style={styles.recipeDisplayTitle}>{recipe.recipeName}</h3>
                  </div>
                  
                  <div style={styles.recipeSteps}>
                    <pre style={styles.recipeStepsText}>{recipe.recipeSteps}</pre>
                  </div>

                  <div style={styles.recipeActions}>
                    {/* <a
                      href={recipe.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.youtubeButton}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#b91c1c';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#dc2626';
                      }}
                    >
                      📺 Watch on YouTube
                    </a> */}
                <a
  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.recipeName)}`}
  target="_blank"
  rel="noopener noreferrer"
  style={styles.youtubeButton}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#b91c1c';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#dc2626';
  }}
>
  📺 Watch on YouTube
</a>

                   
                     <a href="#chef"> <button 
                      onClick={() => setIngredients("")}
                      style={styles.tryAgainButton}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#f0f9ff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                    
                      }}
                    >
                       
                      🔄 Try Another Recipe
                    </button></a>
                  </div>
                </div>
              )}
            </div>

            {/* Tips Section */}
            <div style={styles.tipsSection}>
              <div style={styles.tipCard}>
                <h4 style={styles.tipTitle}>💡 Pro Tips</h4>
                <ul style={styles.tipList}>
                  <li>• Include specific quantities when possible</li>
                  <li>• Mention dietary restrictions or preferences</li>
                  <li>• Add spices and seasonings you have</li>
                  <li>• Include cooking equipment available</li>
                </ul>
              </div>

              <div style={styles.tipCard}>
                <h4 style={styles.tipTitle}>🎯 Popular Combinations</h4>
                <div style={styles.popularCombos}>
                  <button 
                    onClick={() => setIngredients("chicken, rice, vegetables, soy sauce")}
                    style={styles.comboButton}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f0f9ff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    🍛 Chicken fried rice
                  </button>
                  <button 
                    onClick={() => setIngredients("pasta, tomatoes, garlic, basil")}
                    style={styles.comboButton}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f0f9ff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    🍝 Italian pasta
                  </button>
                  <button 
                    onClick={() => setIngredients("eggs, cheese, vegetables, bread")}
                    style={styles.comboButton}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f0f9ff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    🥪 Breakfast combo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return currentPage === 'home' ? <Home /> : <RecipeGenerator />;
}

const styles = {
  // Global styles
  app: {
    minHeight: '100vh',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },

  // Header styles
  header: {
    background: 'linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)',
    color: 'white',
    padding: '20px 0',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },

  logo: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 0
  },

  tagline: {
    textAlign: 'center',
    color: '#bae6fd',
    marginTop: '8px',
    fontSize: '16px',
    margin: '8px 0 0 0'
  },

  // Hero section styles
  hero: {
    padding: '80px 0'
  },

  heroContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px'
  },

  heroLeft: {
    flex: '1',
    minWidth: '300px',
    marginBottom: '48px'
  },

  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: '24px',
    lineHeight: '1.2'
  },

  highlight: {
    color: '#0ea5e9'
  },

  heroDescription: {
    fontSize: '20px',
    color: '#6b7280',
    marginBottom: '32px',
    lineHeight: '1.6'
  },

  heroButtons: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  },

  primaryButton: {
    backgroundColor: '#0ea5e9',
    color: 'white',
    fontWeight: '600',
    padding: '16px 32px',
    borderRadius: '50px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },

  secondaryButton: {
    border: '2px solid #0ea5e9',
    color: '#0ea5e9',
    backgroundColor: 'transparent',
    fontWeight: '600',
    padding: '16px 32px',
    borderRadius: '50px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  heroRight: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center'
  },

  heroImageContainer: {
    position: 'relative'
  },

  heroImage: {
    width: '300px',
    height: '300px',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
  },

  chefIcon: {
    textAlign: 'center'
  },

  chefEmoji: {
    fontSize: '100px',
    marginBottom: '16px',
    display: 'block'
  },

  cookingEmojis: {
    fontSize: '40px'
  },

  // Features section
  features: {
    background: 'linear-gradient(180deg, #f0f9ff 0%, white 100%)',
    padding: '80px 0'
  },

  sectionTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#374151',
    marginBottom: '48px'
  },

  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px'
  },

  featureCard: {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },

  featureIcon: {
    fontSize: '48px',
    marginBottom: '16px'
  },

  featureTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '16px'
  },

  featureDescription: {
    color: '#6b7280',
    lineHeight: '1.6'
  },

  // Testimonials section
  testimonialsSection: {
    padding: '80px 0',
    background: 'linear-gradient(180deg, white 0%, #f0f9ff 100%)'
  },

  sectionSubtitle: {
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: '48px',
    fontSize: '16px'
  },

  featuredReviewContainer: {
    maxWidth: '800px',
    margin: '0 auto 48px auto'
  },

  featuredReview: {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    borderLeft: '4px solid #0ea5e9'
  },

  reviewHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px'
  },

  userInfo: {
    display: 'flex',
    alignItems: 'center'
  },

  userEmoji: {
    fontSize: '48px',
    marginRight: '16px'
  },

  userName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#374151',
    margin: '0 0 4px 0'
  },

  rating: {
    color: '#fbbf24',
    fontSize: '18px',
    marginBottom: '4px'
  },

  userLocation: {
    fontSize: '12px',
    color: '#6b7280'
  },

  quoteIcon: {
    fontSize: '60px',
    color: '#e0f2fe',
    lineHeight: '1'
  },

  reviewText: {
    fontSize: '18px',
    color: '#374151',
    fontStyle: 'italic',
    lineHeight: '1.6',
    margin: '0 0 24px 0'
  },

  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px'
  },

  progressDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#cbd5e1',
    transition: 'all 0.3s ease'
  },

  activeDot: {
    backgroundColor: '#0ea5e9',
    width: '32px',
    borderRadius: '4px'
  },

  reviewsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  },

  reviewCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },

  highlightedCard: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 25px rgba(14, 165, 233, 0.2)',
    border: '2px solid #93c5fd'
  },

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  },

  cardEmoji: {
    fontSize: '24px',
    marginRight: '12px'
  },

  cardName: {
    fontWeight: '600',
    color: '#374151',
    margin: '0 0 4px 0',
    fontSize: '16px'
  },

  cardRating: {
    color: '#fbbf24',
    fontSize: '14px',
    marginBottom: '2px'
  },

  cardTime: {
    fontSize: '12px',
    color: '#6b7280'
  },

  cardText: {
    color: '#374151',
    fontSize: '14px',
    lineHeight: '1.5',
    margin: 0
  },

  liveFeedContainer: {
    marginTop: '32px',
    textAlign: 'center'
  },

  liveFeed: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#dcfce7',
    color: '#166534',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px'
  },

  liveIndicator: {
    width: '8px',
    height: '8px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    marginRight: '8px',
    animation: 'pulse 2s infinite'
  },

  // Stats section
  stats: {
    padding: '48px 0',
    backgroundColor: 'white'
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '32px',
    textAlign: 'center'
  },

  statItem: {
    padding: '16px'
  },

  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#0ea5e9',
    marginBottom: '8px'
  },

  statLabel: {
    color: '#6b7280',
    fontSize: '16px'
  },

  // CTA section
  cta: {
    background: 'linear-gradient(90deg, #0ea5e9 0%, #0284c7 100%)',
    padding: '80px 0',
    color: 'white'
  },

  ctaContent: {
    textAlign: 'center'
  },

  ctaTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '24px'
  },

  ctaDescription: {
    fontSize: '20px',
    color: '#bae6fd',
    marginBottom: '32px',
    maxWidth: '600px',
    margin: '0 auto 32px auto',
    lineHeight: '1.6'
  },

  ctaButton: {
    backgroundColor: 'white',
    color: '#0ea5e9',
    fontWeight: 'bold',
    padding: '16px 40px',
    borderRadius: '50px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },

  // Footer
  footer: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '32px 0'
  },

  footerContent: {
    textAlign: 'center'
  },

  footerTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px'
  },

  footerSubtitle: {
    color: '#9ca3af',
    marginBottom: '16px'
  },

  footerEmojis: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    fontSize: '24px'
  },

  // Recipe Generator styles
  recipeApp: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f9ff 0%, white 100%)',
    fontFamily: 'Arial, sans-serif'
  },

  recipeHeader: {
    background: 'linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)',
    color: 'white',
    padding: '24px 0',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },

  recipeHeaderContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },

  recipeNavigation: {
    display: 'flex',
    alignItems: 'center'
  },

  backButton: {
    marginRight: '16px',
    padding: '8px 16px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },

  recipeTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: 0
  },

  recipeSubtitle: {
    color: '#bae6fd',
    marginTop: '4px',
    fontSize: '16px',
    margin: '4px 0 0 0'
  },

  headerChef: {
    fontSize: '60px'
  },

  recipeContainer: {
    padding: '48px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },

  recipeContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },

  recipeCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    padding: '32px',
    marginBottom: '32px'
  },

  recipeIntro: {
    textAlign: 'center',
    marginBottom: '32px'
  },

  recipeChefIcon: {
    fontSize: '60px',
    marginBottom: '16px'
  },

  recipeCardTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: '16px'
  },

  recipeCardDescription: {
    fontSize: '18px',
    color: '#6b7280',
    lineHeight: '1.6'
  },

  recipeInputContainer: {
    maxWidth: '600px',
    margin: '0 auto'
  },

  inputWrapper: {
    position: 'relative',
    marginBottom: '24px'
  },

  ingredientInput: {
    width: '100%',
    padding: '16px 50px 16px 16px',
    fontSize: '18px',
    border: '2px solid #e0f2fe',
    borderRadius: '12px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box'
  },

  inputIcon: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '24px'
  },

  generateButton: {
    width: '100%',
    background: 'linear-gradient(90deg, #0ea5e9 0%, #0284c7 100%)',
    color: 'white',
    fontWeight: 'bold',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },

  disabledButton: {
    opacity: 0.5,
    cursor: 'not-allowed',
    transform: 'none'
  },

  loadingContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  spinner: {
    width: '20px',
    height: '20px',
    border: '2px solid transparent',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginRight: '12px'
  },

  recipeDisplay: {
    marginTop: '48px',
    padding: '32px',
    background: 'linear-gradient(90deg, #f0f9ff 0%, #e0f2fe 100%)',
    borderRadius: '12px',
    borderLeft: '4px solid #0ea5e9'
  },

  recipeDisplayHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px'
  },

  recipeIcon: {
    fontSize: '40px',
    marginRight: '16px'
  },

  recipeDisplayTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#374151',
    margin: 0
  },

  recipeSteps: {
    marginBottom: '32px'
  },

  recipeStepsText: {
    whiteSpace: 'pre-wrap',
    color: '#374151',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '1.6',
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: 0
  },

  recipeActions: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  },

  youtubeButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc2626',
    color: 'white',
    fontWeight: '600',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease'
  },

  tryAgainButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #0ea5e9',
    color: '#0ea5e9',
    backgroundColor: 'transparent',
    fontWeight: '600',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  tipsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  },

  tipCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },

  tipTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center'
  },

  tipList: {
    color: '#6b7280',
    lineHeight: '1.8',
    margin: 0,
    paddingLeft: '16px'
  },

  popularCombos: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },

  comboButton: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '8px',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    color: '#6b7280',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '14px'
  }
};

export default App;

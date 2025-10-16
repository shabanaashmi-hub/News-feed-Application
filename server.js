const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static("public"));

const newsData = [
  {
    title: "New Tech Breakthrough in AI",
    description: "Scientists have developed a new AI model that surpasses previous benchmarks in speed and accuracy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReo1kwCuwNGDp0yc7qF0ZDlyjqK8QFz0Ys6Q&s",
    link: "https://www.theguardian.com/technology/artificialintelligenceai"
  },
  {
    title: "Sports Championship Updates", 
    description: "The national football championship saw an exciting match between the top two teams with a nail-biting finish.",
    image: "https://madhyamamonline.com/h-upload/2025/02/17/2509315-tamilnadu.jpg",
    link: "https://sportstar.thehindu.com/athletics/indians-results-medals-world-para-athletics-championships-2025-october-3-day-7-new-delhi/article70121372.ece"
  },
  {
    title: "Global Climate Change Concerns",
    description: "Experts warn about rising sea levels, record-breaking temperatures, and the urgent need for action.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaqefg-9aImXFcoKaqWhDMlRMLIgDUSQQrg&s",
    link: "https://www.britannica.com/science/global-warming"
  },
  {
    title: "stock Market Hits Record Highs",
    description: "The stock market reached a new all-time high today, led by gains in the technology sector.",
    image: "https://www.moneyseth.com/media/blog_headers/top_website_for_share_market.webp",
    link: "https://www.cnbc.com/2025/10/02/stock-market-today-live-updates.html"
  },
  {
    title: "Health: Tips for a Balanced Diet",
    description: "Nutritionists recommend including more whole grains, vegetables, and lean proteins in your daily meals.",
    image: "https://www.shutterstock.com/image-vector/health-tips-badge-icon-flat-260nw-1120067204.jpg",
    link: "https://www.today.com/health/diet-fitness/low-impact-workout-plan-diet-tips-boost-mental-health-rcna234416"
  },
  {
    title: "Entertainment: New Movie Release",
    description: "The latest blockbuster has hit theaters, drawing crowds with stunning visuals and an engaging storyline.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZFyLCU-vRAe91bqAgy57dKfU-e_fa2R__Q&s",
    link: "https://timesofindia.indiatimes.com/entertainment/english/hollywood/news/the-simpsons-new-movie-underway-slated-for-2027-release-heres-what-we-know/articleshow/124227448.cms"
  },
];

app.get("/news", (req, res) => {
  res.json(newsData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

// src/api/index.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/api/wordle", async (req, res) => {
  const options = {
    method: "POST",
    url: "https://wordle-game-api1.p.rapidapi.com/word",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY, // Ensure the key matches
      "X-RapidAPI-Host": "wordle-game-api1.p.rapidapi.com",
    },
    data: {
      timezone: "UTC + 4",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data from Wordle API");
  }
});

// New route to check a word
app.post("/api/check-word", async (req, res) => {
  const { word } = req.body;

  const options = {
    method: "POST",
    url: "https://wordle-game-api1.p.rapidapi.com/guess",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "wordle-game-api1.p.rapidapi.com",
    },
    data: {
      word: word,
      timezone: "UTC + 4",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error checking word with Wordle API");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

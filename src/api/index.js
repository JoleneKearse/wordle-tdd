import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
const port = 3000;

app.get("/api/wordle", (req, res) => {
  const options = {
    method: "POST",
    url: "https://wordle-game-api1.p.rapidapi.com/word",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f4fcf66a9amsh29ef3462d4e41fdp1d9656jsnc02bc1da932e",
      "X-RapidAPI-Host": "wordle-game-api1.p.rapidapi.com",
    },
    data: {
      timezone: "America/Toronto",
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

app.listen(port, () => {
  console.log("listening on port: " + port);
});
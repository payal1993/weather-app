import express from "express";
import axios from "axios";
import City from "../models/City.js";

const router = express.Router();

// Fetch weather data
router.get("/:city", async (req, res) => {
  const { city } = req.params;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching weather" });
  }
});

// Save city
router.post("/favorite", async (req, res) => {
  try {
    const newCity = new City({ name: req.body.name });
    await newCity.save();
    res.json(newCity);
  } catch (err) {
    res.status(500).json({ message: "Error saving city" });
  }
});

// Get favorites
router.get("/favorites/all", async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: "Error fetching favorites" });
  }
});

export default router;

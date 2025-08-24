import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Favorites from "./components/Favorites";
import { fetchWeather, saveCity, getFavorites } from "./services/api";

function App() {
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (city) => {
    const { data } = await fetchWeather(city);
    setWeather(data);
  };

  const handleSave = async () => {
    if (weather?.name) {
      await saveCity(weather.name);
      loadFavorites();
    }
  };

  const loadFavorites = async () => {
    const { data } = await getFavorites();
    setFavorites(data);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">🌦️ Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} onSave={handleSave} />}
      <Favorites favorites={favorites} onSelect={handleSearch} />
    </div>
  );
}

export default App;

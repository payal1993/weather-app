import React from "react";

function WeatherCard({ weather, onSave }) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p>🌡️ {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬️ Wind: {weather.wind.speed} m/s</p>
      <button
        onClick={onSave}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        Save City
      </button>
    </div>
  );
}

export default WeatherCard;

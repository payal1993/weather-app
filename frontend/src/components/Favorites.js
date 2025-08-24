import React from "react";

function Favorites({ favorites, onSelect }) {
  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">⭐ Favorite Cities</h3>
      <ul>
        {favorites.map((city) => (
          <li key={city._id}>
            <button
              onClick={() => onSelect(city.name)}
              className="text-blue-600 underline"
            >
              {city.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;

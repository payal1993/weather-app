# 🌦️ Weather App (React + Node.js + MongoDB)

A full-stack weather application where users can search for cities, view live weather data, and save their favorite cities.

## 🚀 Features
- Search weather by city (using OpenWeather API)
- Save favorite cities (stored in MongoDB)
- View list of saved favorite cities
- Responsive UI with React + TailwindCSS

## 🛠️ Tech Stack
- **Frontend:** React, Axios, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas or Local)

---

## 📂 Project Structure
```
weather-app/
│── backend/
│   ├── server.js
│   ├── routes/weather.js
│   ├── models/City.js
│   ├── .env (not included)
│
│── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── SearchBar.js
│   │   │   ├── WeatherCard.js
│   │   │   ├── Favorites.js
│   │   ├── services/api.js
│   │   ├── index.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder with:
```
MONGO_URI=your_mongodb_connection_string
WEATHER_API_KEY=your_openweather_api_key
PORT=5000
```

Run the server:
```bash
npm start
```

### 2️⃣ Frontend Setup
```bash
cd frontend
npm install
npm start
```

The app will run at: `http://localhost:3000`  
Backend runs at: `http://localhost:5000`

---

## 🔑 API Used
- [OpenWeather API](https://openweathermap.org/api)

---

## 📸 Demo
![alt text](<Screenshot 2025-08-24 at 7.27.53 PM.png>)

---

## 📤 Deployment
- **Frontend:** Netlify / Vercel
- **Backend:** Render / Heroku / Railway
- **Database:** MongoDB Atlas

---

## 👩‍💻 Author
Created for learning & portfolio purposes. 

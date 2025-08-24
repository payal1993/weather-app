import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001/api/weather" });

export const fetchWeather = (city) => API.get(`/${city}`);
export const saveCity = (name) => API.post("/favorite", { name });
export const getFavorites = () => API.get("/favorites/all");

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weather.js";

dotenv.config();

const app = express();

// ✅ Configure CORS
app.use(cors({
  origin: "https://chic-gumdrop-81bc3d.netlify.app",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

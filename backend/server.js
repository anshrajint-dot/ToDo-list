import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import tasksRoutes from "./routes/tasksRoutes.js";
import subjectsRoutes from "./routes/subjectsRoutes.js"; // ✅ ADDED

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/tasks", tasksRoutes);
app.use("/api/subjects", subjectsRoutes); // ✅ ADDED

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));

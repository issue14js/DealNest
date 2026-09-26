import express from "express";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Charcha API is running",
  });
});

app.use("/api/auth", authRoute);

export default app; 
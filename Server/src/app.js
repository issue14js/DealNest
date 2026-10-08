import express from "express";
import authRoute from "./routes/authRoute.js";
import leadRoute from "./routes/leadRoute.js"
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
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DealNest API is running",
  });
});

app.use("/api/auth", authRoute);
app.use("/api/lead",leadRoute)

export default app;
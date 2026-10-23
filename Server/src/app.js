import express from "express";
import authRoute from "./routes/authRoute.js";
import leadRoute from "./routes/leadRoute.js"
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(express.static(
  path.join(__dirname, "../Client/dist")
));

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

app.get("/{*path}", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Client/dist/index.html")
  );
});

export default app;
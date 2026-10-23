
import express from "express";
import authRoute from "./routes/authRoute.js";
import leadRoute from "./routes/leadRoute.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
<<<<<<< HEAD

app.use(express.json());

app.use(express.static(
  path.join(__dirname, "../Client/dist")
));

=======

// Paths
const frontendPath = path.resolve(__dirname, "../../Client/dist");
const uploadsPath = path.join(__dirname, "../uploads");

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS for Vite development server
>>>>>>> 89351a47d4a5a0e6910948ca90236a5f9351b2c7
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Uploaded files
app.use("/uploads", express.static(uploadsPath));

// API routes
app.use("/api/auth", authRoute);
app.use("/api/lead", leadRoute);

// API health check
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "DealNest API is running",
  });
});

// Serve React production build
app.use(express.static(frontendPath));

<<<<<<< HEAD
app.get("/{*path}", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Client/dist/index.html")
  );
});

export default app;
=======
// React Router fallback (Express 5)
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

export default app;
>>>>>>> 89351a47d4a5a0e6910948ca90236a5f9351b2c7

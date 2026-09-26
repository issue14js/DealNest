import userModel from "../model/authModel.js";
import jwt from "jsonwebtoken";
import { config } from "../config/env.js";

async function authMiddilware(req, res, next) {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        message: "Token not found",
      });
    }
    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await userModel.findById(decoded.id);


    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token",
      error: err.message
    });
  }
}
export default authMiddilware
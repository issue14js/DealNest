import mongoose from "mongoose";
import userModel from "../model/authModel.js";
import { config } from "../config/env.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function userRegister(req, res) {
  try {
    const { email, role, password, name,number,department } = req.body;
    const user = await userModel.findOne({ email }).select("+password");
    if (user) {
      return res.status(400).json({
        message: "User Already Exist with this email ",
      });
    }
    const hashpass = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashpass,
      role,
      number,
      department
    });
    const token = jwt.sign({ id: newUser._id }, config.jwtSecret, {
      expiresIn: "5h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    return res.status(201).json({
      message: "User Created Succsessfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
        role: newUser.role,
        number:newUser.number,
        department:newUser.department
      },
    });
  } catch (err) {
    console.log("User Register Faild from Controller", err);
    return res.status(500).json({
      message: `Error user cerate falid `,
      error: err.message,
    });
  }
}
async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        message: "user not Avelable with this email or password",
      });
    }
    const compairPass = await bcrypt.compare(password, user.password);
    if (!compairPass) {
      return res.status(404).json({
        message: "user not Avelable with this email or password",
      });
    }
    user.lastLogin = new Date();
    await user.save();
    const token = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: "5h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(201).json({
      message: "User login Succssfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        number:user.number,
        department:user.department,
        lastLogin: user.lastLogin,
      },
    });
  } catch (err) {
    console.log("User Login Faild from Controller", err);
    return res.status(500).json({
      message: `Error user Login falid `,
      error: err.message,
    });
  }
}
async function userLogout(req, res) {
  try {
    // console.log(req.cookies.token)
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    return res.status(200).json({
      message: "User logout sucsessfully",
    });
  } catch (err) {
    console.log("Error user logout faild");
    console.log(err);
  }
}
async function getMe(req, res) {
  try {
    const user = req.user;
    return res.status(201).json({
      message: "user Get sucsessfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        number:user.number,
        department:user.department,
        lastLogin: user.lastLogin,
      },
    });
  } catch (err) {
    console.log("Error user get faild");
    error: err.message;
  }
}
async function updateUser(req, res) {
  try {
    const user = req.user;
    const { name, email, avatar, role,number,department } = req.body;
    const newUser = await userModel.findOneAndUpdate(
      { email: req.user.email },
      {
        name,
        email,
        avatar,
        role,
        number,
        department
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );
    return res.status(200).json({
      message: "user Update sucsessfully",
      user: {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        avatar: newUser.avatar,
        number:newUser.number,
        department:newUser.department,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "User Update falid ",
      err,
    });
    console.log(err);
  }
}
async function updateAvatar(req, res) {
  try {
    console.log("updateAvatar chala");

    if (!req.file) {
      return res.status(400).json({
        message: "Avatar file is required",
      });
    }

    const avatar = `/uploads/${req.file.filename}`;

    const updatedUser = await userModel.findByIdAndUpdate(
      req.user.id,
      { avatar },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    return res.status(200).json({
      message: "Avatar updated successfully",
      user: {
        avatar: updatedUser.avatar,
      },
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Update Avatar failed",
      error: err.message,
    });
  }
}
async function updatePassword(req, res) {
  try {
    const { currentpassword, newpassword } = req.body;

    const user = await userModel.findById(req.user._id).select("+password");

    const compairPass = await bcrypt.compare(currentpassword, user.password);

    if (!compairPass) {
      return res.status(400).json({
        message: "Current password is incorrect",
      });
    }

    const hashpass = await bcrypt.hash(newpassword, 10);

    await userModel.findByIdAndUpdate(user._id, {
      password: hashpass,
    });

    return res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Password update failed",
    });
  }
}
async function getadmindata(req,res){
  return res.status(201).json({
    message:"chala re"
  })
}
export {
  userRegister,
  userLogin,
  userLogout,
  getMe,
  updateUser,
  updateAvatar,
  updatePassword,
  getadmindata
};

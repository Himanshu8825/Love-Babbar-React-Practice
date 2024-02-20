import express from "express";
import User from "../models/User";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const router = express.Router();

router.use(cookieParser(process.env.JWT_SECRET));
router.use(express.json());

router.post("/signup", async (req, res) => {
  try {
    const user = ({ firstName, lastName, email, password, confirmPassword } =
      req.body);

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bycrypt.hash(password, 10);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
    });
    console.log(newUser);
    await newUser.save();

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const expires = new Date();
    expires.setDate(expires.getDate() + 1);

    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
      domain: "localhost",
      signed: true,
      expires,
    });
    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

// Route for user login
router.post("/login", async (req, res) => {
  try {
    const { email, password, phoneNo } = req.body;

    if (!email && !phoneNo) {
      return res.status(401).send("Please enter email or phonenumber");
    }

    let user;
    if (email) {
      user = await User.findOne({ email });
    } else if (phoneNo) {
      user = await User.findOne({ phoneNo });
    }

    if (!user) {
      return res.status(401).send("Invalid credentials");
    }

    const isMatchedpass = await bcrypt.compare(password, user.password);
    if (!isMatchedpass) {
      return res.status(401).send("Invalid credentials");
    }

    // Clear any existing token cookie
    res.clearCookie("token", {
      httpOnly: true,
      path: "/",
      domain: "localhost",
      signed: true,
      expires: new Date(0),
    });

    // Generate a new token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);

    // Set the new token as a cookie
    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
      domain: "localhost",
      signed: true,
      expires,
    });

    return res.status(200).redirect("/home");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});
export default router;

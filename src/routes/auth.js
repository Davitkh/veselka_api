import { Router } from "express";
const router = Router();
import User from "../model/user.js";
import bcrypt from "bcryptjs";

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    res.status(400).json({ message: "User is already exists" });
  } else {
    const hash = await bcrypt.hash(password, 10);

    const newUser = await User({
      firstName,
      lastName,
      email,
      password: hash,
    });
    newUser.save();
    res.status(201).json({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      // password: newUser.,
    });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const isSame = await bcrypt.compare(password, user.password);
    if (isSame) {
      res.status(201).json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(400).json({ message: "Password is incorrect" });
    }
  } else {
    res.status(400).json({ message: "User is not found" });
  }
});

export default router;

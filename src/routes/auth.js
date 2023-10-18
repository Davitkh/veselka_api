import { Router } from "express";
const router = Router();
import User from "../model/user.js";

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    res.status(400).json({ message: "User is already exists" });
  } else {
    const newUser = await User({
      firstName,
      lastName,
      email,
      password,
    });
    newUser.save();
    res.status(200).json({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      // password: newUser.,
    });
  }
});

export default router;

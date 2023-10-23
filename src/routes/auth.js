import { Router } from 'express';
const router = Router();
import User from '../model/user.js';
import bcrypt from 'bcryptjs';

router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, password: hash });
    await newUser.save();
    res.json({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/signin', async (req, res) => {
  try {
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
        res.status(400).json({ message: 'Password is incorrect' });
      }
    } else {
      res.status(400).json({ message: 'User is not found' });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;

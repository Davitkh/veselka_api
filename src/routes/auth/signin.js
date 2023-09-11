import { Router, json } from 'express';
const router = Router();

router.get('/signin', (req, res) => {
  res.json({ test: 'request' });
});

export default router;

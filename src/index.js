import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import signin from './routes/auth/signin.js';

const app = express();

app.use('/auth', signin);

app.listen(4000, () => console.log('server is running!'));

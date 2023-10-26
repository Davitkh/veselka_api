import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
import loginRouter from './routes/auth.js';
import bodyParser from 'body-parser';
import cors from 'cors';

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use('/auth', loginRouter);

const connectDB = async (uri) => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(uri);
    console.log('DB is connected');
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

async function start() {
  try {
    const PORT = process.env.PORT || 4000;
    const DB_URI =
      process.env.DB_URI ||
      'mongodb+srv://veselka:xsh9mn4mozFKpiOm@veselkadb.pugpjlt.mongodb.net/?retryWrites=true&w=majority';
    await connectDB(DB_URI);
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

start();

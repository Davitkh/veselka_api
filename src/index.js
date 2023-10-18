import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
import loginRouter from "./routes/auth.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", loginRouter);

async function start() {
  const PORT = process.env.PORT || 4000;
  const DB_URI =
    process.env.DB_URI ||
    "mongodb+srv://veselka:xsh9mn4mozFKpiOm@veselkadb.pugpjlt.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => console.log(`DB is connected`)
  );
  app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
}

start();

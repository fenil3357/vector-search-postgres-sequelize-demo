import express from "express";
import * as dotenv from 'dotenv'

import { DB } from "./db.js";
import indexRouter from "./routes.js";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }))

app.use('/api', indexRouter);

app.listen(PORT, async () => {
  try {
    await DB.authenticate()
    console.log(`Express server is running successfully on port ${PORT}...`)
  } catch (error) {
    console.log("🚀 ~ Something went wrong while starting the express server:", error)
    process.exit(1);
  }
})
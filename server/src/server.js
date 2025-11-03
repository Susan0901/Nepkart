import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin:
      ENV.NODE_ENV === "development" ? ENV.CLIENT_DEV_URL : ENV.CLIENT_PROD_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const startServer = async () => {
  try {
    await connectDB();
    console.log(`✅ Server running on PORT: ${ENV.PORT}`);
  } catch (error) {
    console.log(`❌ Failed to start the server: ${error}`);
  }
};

startServer();

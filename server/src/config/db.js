import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URL);
    console.log(
      `✅ Successfully connected MONGO_DB on host:${conn.connection.host}`
    );
  } catch (error) {
    console.log(`❌ Failed to connect MONGO_DB: ${error}`);
    process.exit(1);
  }
};

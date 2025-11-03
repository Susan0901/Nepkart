import express from "express";
import { ENV } from "./config/env.js";

const app = express();

app.get("/", (req,res) => {
    res.status(200).json({message: "Welcome on the board"});
});

app.listen(ENV.PORT, () => {
  console.log(`Server running on PORT: ${ENV.PORT}`);
});

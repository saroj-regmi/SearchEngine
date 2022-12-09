import express from "express";

// for confidential data
import dotenv from "dotenv";
dotenv.config();

// getting the port
const PORT = process.env.PORT || 3001;

// defining the app
const app = express();

app.listen(PORT, () => {
  console.log(`The app is running at port ${PORT}`);
});
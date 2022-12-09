import express from "express";

// routes
import linkRouter from "./routes/linkRoutes.js";
import siteRouter from "./routes/siteRoutes.js";

// for confidential data
import dotenv from "dotenv";
dotenv.config();

// getting the port
const PORT = process.env.PORT || 3001;

// defining the app
const app = express();

// using the routes
app.use("/api/v1/links", linkRouter); // handles all the link routes
app.use("/api/v1/sites", siteRouter); // handles all the site routes

// running the server
app.listen(PORT, () => {
  console.log(`The app is running at port ${PORT}`);
});

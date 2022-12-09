import mongoose from "mongoose";

// creating the site schema
const siteSchema = mongoose.Schema({
  link: String,
  coverImage: String,
  description: String,
  title: String,
  keywords: String,
});

export default siteSchema;

import mongoose from "mongoose";

const siteSchema = mongoose.Schema({
  link: String,
  coverImage: String,
  description: String,
  title: String,
  keywords: String,
});

export default siteSchema;

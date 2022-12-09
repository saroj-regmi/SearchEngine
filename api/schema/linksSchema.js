import mongoose from "mongoose";

// creating a schema
const linksSchema = mongoose.Schema({
  link: String,
  status: Boolean, // true means the site is already scrapped and vice versa
});

export default linksSchema;
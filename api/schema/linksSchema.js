import mongoose from "mongoose";

const linksSchema = mongoose.Schema({
  link: String,
  status: Boolean, // true means the site is already scrapped and vice versa
});

export default linksSchema;
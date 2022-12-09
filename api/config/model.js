import mongoose from "mongoose";
import linksSchema from "../schema/linksSchema";
import siteSchema from "../schema/siteSchema";

export const siteModel = mongoose.model("sites", siteSchema);
export const linksModel = mongoose.model("links", linksSchema);

import express from "express";

// getting the controllers
import {
  getAllSites,
  updateSite,
  deleteAllSites,
} from "../controllers/_site.js";

// creating the router
const siteRouter = express.Router();

// routes
siteRouter.route("/").get(getAllSites);
siteRouter.route("/changeStatus").patch(updateSite);
siteRouter.route("/delete").delete(deleteAllSites);

export default siteRouter;

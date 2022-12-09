import express from "express";

// getting the controllers
import {
  getAllRoutes,
  changeRouteStatus,
  deleteAllRoutes,
} from "../controllers/_site.js";

// creating the router
const siteRouter = express.Router();

// routes
siteRouter.route("/").get(getAllRoutes);
siteRouter.route("/changeStatus").patch(changeRouteStatus);
siteRouter.route("/delete").delete(deleteAllRoutes);

export default siteRouter;

import express from "express";

// getting the controllers
import {
  getAllRoutes,
  changeRouteStatus,
  deleteAllRoutes,
} from "../controllers/_links.js";

// creating the router
const linkRouter = express.Router();

// routes
linkRouter.route("/").get(getAllRoutes);
linkRouter.route("/changeStatus").patch(changeRouteStatus);
linkRouter.route("/delete").delete(deleteAllRoutes);

export default linkRouter;

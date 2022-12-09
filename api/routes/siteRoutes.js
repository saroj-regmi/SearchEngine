import express from "express";

// creating the router
const siteRouter = express.Router();

// routes
siteRouter.route("/").get(getAllRoutes);
siteRouter.route("/changeStatus").patch(changeRouteStatus);
siteRouter.route("/delete").delete(deleteAllRoutes);

export default siteRouter;

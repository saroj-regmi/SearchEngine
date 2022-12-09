import express from "express";

// creating the router
const linkRouter = express.Router();

// routes
linkRouter.route("/").get(getAllRoutes);
linkRouter.route("/changeStatus").patch(changeRouteStatus);
linkRouter.route("/delete").delete(deleteAllRoutes);

export default linkRouter;

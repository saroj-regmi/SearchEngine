import express from "express";

// getting the controllers
import {
  getAllLinks,
  getUnscrappedLinks,
  updateOneLink,
  deleteAllLinks,
} from "../controllers/_links.js";

// creating the router
const linkRouter = express.Router();

// routes
linkRouter.route("/").get(getAllLinks);
linkRouter.route("/changeStatus").patch(updateOneLink); // for changing the mode of the link
linkRouter.route("/delete").delete(deleteAllLinks);
linkRouter.route("/unscrapped").get(getUnscrappedLinks);

export default linkRouter;

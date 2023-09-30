import { Router } from "express";

import upload from "../config/multer.js";
import {
  addBackImage,
  allBackImages,
  editBackImage,
  getBackImageByPage,
} from "../controllers/backImageChange.js";
const backImageRouter = Router();

backImageRouter.post(
  "/addBackImage",
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  addBackImage
);

backImageRouter.get("/getAllBackImage", allBackImages);

backImageRouter.get("/getBackImageByPage/:pageName", getBackImageByPage);

backImageRouter.put(
  "/editBackImage/:pageName",
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  editBackImage
);

export default backImageRouter;

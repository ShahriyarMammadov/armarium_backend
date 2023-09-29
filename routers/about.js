import { Router } from "express";
import upload from "../config/multer.js";
import {
  createAbout,
  editAbout,
  getAboutById,
} from "../controllers/haqqimizda.js";
import {
  createMission,
  editMission,
  getMissionById,
} from "../controllers/missiya.js";
import {
  addCertificate,
  allCertificate,
  deleteCertificate,
} from "../controllers/sertifikat.js";
import {
  createZemanet,
  editZemanet,
  getZemanetById,
} from "../controllers/zemanet.js";
const aboutRouter = Router();

aboutRouter.post(
  "/addCertificate",
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  addCertificate
);

aboutRouter.get("/allCertificate", allCertificate);
aboutRouter.delete("/deleteCertificate/:id", deleteCertificate);

aboutRouter.put("/editHaqqimizda/:id", editAbout);
aboutRouter.post("/addHaqqimizda", createAbout);
aboutRouter.get("/getHaqqimizda/:id", getAboutById);

aboutRouter.put("/editMissiya/:id", editMission);
aboutRouter.post("/addMissiya", createMission);
aboutRouter.get("/getMissiya/:id", getMissionById);

aboutRouter.put("/editZemanet/:id", editZemanet);
aboutRouter.post("/addZemanet", createZemanet);
aboutRouter.get("/getZemanet/:id", getZemanetById);

export default aboutRouter;

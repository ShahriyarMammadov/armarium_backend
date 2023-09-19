import { Router } from "express";
import upload from "../config/multer.js";
import { addDoor, allDoors, deleteDoorById } from "../controllers/door.js";
const doorRouter = Router();

// ----------------------- ADD DOOR ----------------------
doorRouter.post(
  "/addDoor",
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  addDoor
);

// ---------------------- ALL DOOR ----------------------
doorRouter.get("/allDoors", allDoors);

// --------------------- DELETE DOOR --------------------
doorRouter.delete("/deleteDoor/:id", deleteDoorById);

export default doorRouter;

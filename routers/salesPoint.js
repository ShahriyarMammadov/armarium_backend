import { Router } from "express";
import {
  allSalesPoint,
  createSalesPoint,
  editSalesPoint,
  getSalesById,
} from "../controllers/salesPoints.js";
const salesPointRouter = Router();

salesPointRouter.post("/createSalesPoint", createSalesPoint);

salesPointRouter.get("/allSalesPoint", allSalesPoint);

salesPointRouter.get("/salesPointById/:id", getSalesById);

salesPointRouter.patch("/editSalesPoint/:id", editSalesPoint);

export default salesPointRouter;

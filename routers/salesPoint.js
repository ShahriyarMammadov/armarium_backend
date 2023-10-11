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

salesPointRouter.get("/allSalesPointById", getSalesById);

salesPointRouter.patch("/editSalesPoint", editSalesPoint);

export default salesPointRouter;

import { Router } from "express";
import { itemRouter } from "./item.routes";

const router = Router();

router.use(itemRouter);

export default router;

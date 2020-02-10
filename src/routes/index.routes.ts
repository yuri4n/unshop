import { Router } from "express";
import { itemRouter } from "./item.routes";
import { orderRouter } from "./order.routes";

const router = Router();

router.use(itemRouter);
router.use(orderRouter);

export default router;

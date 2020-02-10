import { Router, Response, Request } from "express";
import { Order } from "../interfaces/InterfaceOrder";
import ShoppingCart from "../data/ShoppingCart";

const orderRouter = Router();
const shoppingCart: ShoppingCart = new ShoppingCart();

orderRouter.route("/api/orders")
	.get((req: Request, res: Response) => {
		res.json(shoppingCart.heapToArray());
	})
	.post((req: Request, res: Response) => {
		let list = req.body.list;
		shoppingCart.insertItems(list);
	});

export { orderRouter }
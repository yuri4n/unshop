import { Router, Response, Request } from "express";
import ShoppingCart from "../data/ShoppingCart";

const cartRouter = Router();
const shoppingCart: ShoppingCart = new ShoppingCart();

cartRouter.route("/api/cart")
	.get((req: Request, res: Response) => {
		res.json(shoppingCart.heapToArray());
	})
	.post((req: Request, res: Response) => {
		let list = req.body.list;
		shoppingCart.insertItems(list);
	});

export default cartRouter;
import { Router, Response, Request } from "express";
import { Order } from "../interfaces/InterfaceOrder";
import HashmapCreator from "../data/HashmapCreator";

const orderRouter = Router();
const hc = new HashmapCreator();

orderRouter.route("/api/orders")
	.get((req: Request, res: Response) => {
		res.json();
	})
	.post((req: Request, res: Response) => {
		let date: Date = new Date();
		let { price, list } = req.body;

		let order: Order = {
			hashCode: 0,
			date,
			price,
			list
		}

		let hasCode = hc.insert(order);

		res.json(hasCode);
	});

export { orderRouter }
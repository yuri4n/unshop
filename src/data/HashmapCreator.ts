import fs from "fs";
import { Order } from "../interfaces/InterfaceOrder";
import { Hashmap } from "../hash_map/Hashmap";

class HashmapCreator {
	private orders: Order[];
	private hashMap: Hashmap;
	private jsonPath: string = "./src/files/orders.json";

	constructor() {
		this.orders = [];
		this.hashMap = new Hashmap();
		this.readOrders();
	}

	public readOrders(): void {
		let data: string = fs.readFileSync(this.jsonPath, "utf-8");
		this.orders = JSON.parse(data);

		for (let order of this.orders) {
			this.hashMap.insert(order);
		}
	}

	public insert(order: Order): number {
		let hashCode = this.hashMap.insert(order);

		return hashCode;
	}
}

export default HashmapCreator;
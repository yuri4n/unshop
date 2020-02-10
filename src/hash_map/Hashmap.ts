import { LinkedList } from "../linked_list/LinkedList";
import { Order } from "../interfaces/InterfaceOrder";

class Hashmap {
	private size: number;
	private fillFactor: number;
	private items: LinkedList<Order>[];

	constructor() {
		this.size = 8760;
		this.fillFactor = 3;
		this.items = new Array<LinkedList<Order>>(this.size);
	}

	private hash(date: Date): number {
		let fecha = new Date();
		let day: number = fecha.getDate();
		let hour: number = fecha.getHours();

		let hashCode = Number("" + day + hour);

		return hashCode;
	}

	public insert(order: Order) {
		let hashCode: number = this.hash(order.date);

		order.hashCode = hashCode;
		this.items[hashCode].pushBack(order);

		return hashCode;
	}

	public find(date: Date): LinkedList<Order> {
		let hashCode: number = this.hash(date);
		let order = this.items[hashCode];

		return order;
	}
}

export { Hashmap }
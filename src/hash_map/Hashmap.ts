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

	private hash(order: Order): number {
		let day: String = order.date.getDate().toString();
		let hour: String = order.date.getHours().toString();

		let hashCode = Number("" + day + hour);

		return hashCode;
	}

	public insert(order: Order) {
		let hashCode: number = this.hash(order);

		this.items[hashCode].pushBack(order);
	}
}
import BinaryMaxHeap from "../binaryMaxHeap/binaryMaxHeap"
import { Item } from "../interfaces/InterfaceItem";
import DataReader from "../data/DataReader";
import HashmapCreator from "../data/HashmapCreator";
import { Order } from "../interfaces/InterfaceOrder"; 

class ShoppingCart {
    public heap: BinaryMaxHeap;
    public totalPrice: number;
    public stock: DataReader;

    private hc = new HashmapCreator();

    constructor() {
        this.heap = new BinaryMaxHeap();
        this.totalPrice = 0;
        this.stock = new DataReader();
    }

    public removeItem(id: string) {
        let tmp = this.heap.seekAndDestroy(id);
        this.totalPrice -= tmp.price;
    }

    public generateOrder() {
        let current: Item[] = new Array(this.heap.size);
        while (this.heap.size > 0) current.push(this.heap.extractMax());
        let date: Date = new Date();
        
        let order: Order = {
            hashCode: 0,
            date,
            price: this.totalPrice,
            list: current
        }

        let hasCode = this.hc.insert(order);
    }

    public insertItems(id: string[]) {
        let currentIt: Item | null = this.stock.popData();
        while (currentIt != null) {
            for (let a = 0; a < id.length; a++) {
                if (currentIt.id == id[a]) {
                    this.heap.add(currentIt);
                    this.totalPrice += currentIt.price;
                }
            }
            currentIt = this.stock.popData();
        }
        this.stock.readData();
    }

}
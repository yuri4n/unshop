import { Item } from "./InterfaceItem";

interface Order {
    hashCode: number;
    date: Date;
    price: number;
    list: Item[];
}

export { Order };

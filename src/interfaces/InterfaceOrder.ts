import { Item } from "./InterfaceItem";

interface Order {
    hashCode: number;
    date: Date;
    price: string;
    list: Item[];
}

export { Order };

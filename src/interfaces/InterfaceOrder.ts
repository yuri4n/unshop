import { Item } from "./InterfaceItem";

interface Order {
    date: Date;
    price: string;
    list: Item[];
}

export { Order };

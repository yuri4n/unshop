import { Item } from "../interfaces/InterfaceItem";

// BinaryMaxHeap que organiza por precio los items que recibe

class BinaryMaxHeap {
    public items: Item[];
    public size: number;
    public capacity: number;


    constructor() {
        this.items = [{ id: "0", name: "", description: "", price: 0 }];
        this.size = 0;
        this.capacity = 1;
    }

    public heapifyDown() {
        let index = 0;
        while (this.hasLeft(index)) {
            let smallestChild: number = this.left(index);

            if (this.hasRight(index) && this.items[this.right(index)].price < this.items[this.left(index)].price) {
                this.swap(index, smallestChild);
            } else break;

            index = smallestChild;
        }
    }

    public heapifyUp() {
        let index = this.size - 1;

        while (this.hasParent(index) && this.items[this.parent(index)].price < this.items[index].price) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    }

    public search(id: string) {
        for (let a = 1; a <= this.size; a++) {
            if (this.items[a].id == id) return a;
        }
        throw "Object doesn't exist";
    }

    public seekAndDestroy(id: string) {
        let index = this.search(id);
        let item;
        if (index == 1) item = this.extractMax();
        else {
            item = this.items[index];
            this.items[index] = this.items[this.size];
        }
        this.size--;
        return item;
    }

    public add(item: Item) {
        this.ensureCapacity();
        this.size++;
        this.items[this.size] = item;
        this.heapifyUp();
    }

    public ensureCapacity() {
        if (this.size + 1 == this.capacity) {
            let tmp = this.items;
            this.items = new Array(this.capacity * 2);
            this.capacity *= 2;
            for (let a = 0; a < tmp.length; a++) this.items[a] = tmp[a];
        }
    }

    public printHeap() {
        for (let a = 0; a <= this.size; a++) console.log(this.items[a] + " ");
    }

    public peek() {
        return this.items[1];
    }

    public extractMax() {
        let tmp = this.items[1];
        this.items[1] = this.items[this.size];
        this.size--;
        this.heapifyDown();
        return tmp;
    }

    public swap(index1: number, index2: number) {
        let tmp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = tmp;
    }

    public left(parent: number) { return 2 * parent; }
    public right(parent: number) { return 2 * parent + 1; }
    public parent(child: number) {
        if (child % 2 != 0) {
            return child / 2;
        } else return (child - 1) / 2;
    }
    public hasLeft(parent: number) { return this.left(parent) < this.size; }
    public hasRight(parent: number) { return this.right(parent) < this.size; }
    public hasParent(child: number) { return this.parent(child) > 0 }
}

export default BinaryMaxHeap;
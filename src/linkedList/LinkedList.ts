import LinkedListNode from "./LinkedListNode";

class LinkedList<T>{
    public tail: LinkedListNode<T> | null;
    public head: LinkedListNode<T> | null;

    constructor(){}

    public pushFront(key: T): void{

        let node2 = new LinkedListNode(key, null, null);

        if (this.head == null) {
            this.tail = node2;
            this.head = this.tail;
        } else {
            node2.next = this.head;
            node2.prev = null;
            this.head = node2;
            this.head.next!.prev = this.head;
        }

        if (this.tail == null) {
            this.tail = this.head;
        }
    }

    public pushBack(key: T): void{
        let node2 = new LinkedListNode(key, null, null);
        node2.next = null;
        node2.prev = this.tail;

        if (this.head == null) {
            this.tail = node2;
            this.head = this.tail;
        } else {
            this.tail!.next = node2;
            node2.prev = this.tail;
            this.tail = node2;
        }
    }

    public searchValue(value: T): LinkedListNode<T> | null{
        let pointer = this.head;
        if (this.head!.data == value) {
            return this.head;
        }
        while (pointer!.data != value && pointer != this.tail) {
            pointer = pointer!.next;
        }
        if (pointer == this.tail && pointer!.data == value) {
            return this.tail;
        } else if (pointer == this.tail && pointer!.data != value) {
           console.log('Error: El elemento no existe en la lista');
            return null;
        } else {
            return pointer;
        }
    }

    public pop(key: T): T | null{
        if (this.head == null) return null;
    
        if (this.head.data == key){
            let buffNode = this.head;

            this.head = this.head.next;
            return buffNode.data;
        }
        else{
            let prev: LinkedListNode<T> | null = this.head;
            let buffNode = this.head.next;
            
            while(buffNode != this.tail && buffNode!.data != key){
                prev = prev!.next;
                buffNode = prev!.next;
            }
            return buffNode!.data;
        }
    }
}
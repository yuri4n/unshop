import { Nodo } from "./Nodo";

class LinkedList<T> {
  public head: Nodo<T> | null = null;
  public tail: Nodo<T> | null = null;

  pushFront(data: T): void {
    const node = new Nodo<T>(data);
    if (this.head == null) {
      this.tail = node;
      this.head = this.tail;
    } else {
      node.next = this.head;
      node.prev = null;
      this.head = node;
      this.head.next!.prev = this.head;
    }
  }

  printList(): void {
    let currentElement: Nodo<T> | null = this.head;
    if (currentElement == null) {
      console.log("No hay artículos registrados");
    }

    while (currentElement != null) {
      console.log(currentElement!.data);
      currentElement = currentElement!.next;
    }
  }
}

export { LinkedList };

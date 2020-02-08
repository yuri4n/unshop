class LinkedListNode<T> {
    public data: T;
    public prev: LinkedListNode<T> | null;
    public next: LinkedListNode<T> | null;
  
    constructor(data: T, prev: LinkedListNode<T> | null, next: LinkedListNode<T> | null) {
      this.data = data;
      this.prev = prev;
      this.next = next;
    }
  }
  
  export default LinkedListNode;
  
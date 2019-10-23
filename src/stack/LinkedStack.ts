import StackNode from "./StackNode";

class LinkedStack<T> {
  private top: StackNode<T> | null = null;

  pushData(data: T): void {
    let newNode: StackNode<T> = new StackNode<T>(data, this.top);
    this.top = newNode;
  }

  printStack(): void {
    let current: StackNode<T> | null = this.top;
    while (current != null) {
      console.log(current.data);
      current = current.bellow;
    }
  }

  stackToJSON(): string {
    let data: string = "[";
    let current: StackNode<T> | null = this.top;

    while (current != null) {
      if (current.bellow != null) {
        data = data + JSON.stringify(current.data) + ", ";
      } else {
        data = data + JSON.stringify(current.data) + "]";
      }

      current = current.bellow;
    }

    console.log(data);
    return data;
  }
}

export default LinkedStack;

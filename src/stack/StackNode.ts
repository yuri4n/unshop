class StackNode<T> {
  public data: T;
  public bellow: StackNode<T> | null;

  constructor(data: T, bellow: StackNode<T> | null) {
    this.data = data;
    this.bellow = bellow;
  }
}

export default StackNode;

class Nodo<T> {
  public data: T;
  public next: Nodo<T> | null;
  public prev: Nodo<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export { Nodo };

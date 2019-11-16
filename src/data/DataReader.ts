import { Item } from "../item/InterfaceItem";
import fs from "fs";
import LinkedStack from "../stack/LinkedStack";

class DataReader {
  private items: Item[];
  private stack: LinkedStack<Item> = new LinkedStack<Item>();
  private jsonPath: string = "./src/files/items.json";
  private generatedJsonPath: string = "./src/files/generated.json";

  constructor() {
    this.items = [];
    this.readData();
  }

  readData(): void {
    let data: string = fs.readFileSync(this.jsonPath, "utf-8");
    this.items = JSON.parse(data);

    for (let item of this.items) {
      this.stack.pushData(item);
    }
  }

  stackToJSON(): string {
    let data: string = this.stack.stackToJSON();
    return data;
  }

  pushData(data: Item): void {
    this.stack.pushData(data);
  }

  popData(): Item | null {
    let deleted: Item | null = null;
    let node = this.stack.popData();
    if (node) {
      deleted = this.stack.popData()!.data;
    }
    return deleted;
  }
}

export default DataReader;

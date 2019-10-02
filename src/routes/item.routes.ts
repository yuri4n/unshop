import { Router, Response, Request } from "express";
import { Item } from "../item/InterfaceItem";
import fs from "fs";
const uuid = require("uuid/v4");

const jsonPath = "./src/files/items.json";
const generatedJsonPath = "./src/files/generated.json";

const itemRouter = Router();

const formatAndWrite = (items: Item[]): void => {
  const formatItems = JSON.stringify(items, null, 2);
  fs.writeFileSync(jsonPath, formatItems, "utf-8");
};

let data: string = fs.readFileSync(jsonPath, "utf-8");
let items: Item[] = JSON.parse(data);

itemRouter.route("/api").get((req: Request, res: Response) => {
  res.json("UNShop API");
});

itemRouter.get("/api/items", (req: Request, res: Response) => {
  res.json(items);
});

itemRouter.post("/api/items", (req: Request, res: Response) => {
  let { name, description, price } = req.body;
  const newItem: Item = {
    id: uuid(),
    name,
    description,
    price
  };
  items.push(newItem);
  formatAndWrite(items);
  res.send("recibido");
});

itemRouter.get("/api/items/delete/:id", (req: Request, res: Response) => {
  items = items.filter((item: Item) => item.id != req.params.id);
  formatAndWrite(items);
  res.send("eliminado");
});

export { itemRouter };

import { Router } from "express";
import fs from "fs";
import { Item } from "../item/InterfaceItem";
const uuid = require("uuid/v4");

const router = Router();

const formatAndWrite = (items: Item[]): void => {
  const formatItems = JSON.stringify(items, null, 2);
  fs.writeFileSync("./src/files/items.json", formatItems, "utf-8");
};

let data = fs.readFileSync("./src/files/items.json", "utf-8");
let items: Item[] = JSON.parse(data.toString());

router.route("/api").get((req: any, res: any) => {
  res.json("UNShop API");
});

router.get("/api/items", (req: any, res: any) => {
  res.json(items);
});

router.post("/api/items", (req: any, res: any) => {
  let { name, description, price } = req.body;
  const newItem = {
    id: uuid(),
    name,
    description,
    price
  };
  items.push(newItem);
  formatAndWrite(items);
  res.send("recibido");
});

router.get("/api/items/delete/:id", (req: any, res: any) => {
  items = items.filter((item: Item) => item.id != req.params.id);
  formatAndWrite(items);
  res.send("eliminado");
});

export default router;

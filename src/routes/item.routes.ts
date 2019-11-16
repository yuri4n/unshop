import { Router, Response, Request } from "express";
import { Item } from "../item/InterfaceItem";
import DataReader from "../data/DataReader";
const uuid = require("uuid/v4");

const dr: DataReader = new DataReader();
const itemRouter = Router();

// const formatAndWrite = (items: Item[]): void => {
//   const formatItems = JSON.stringify(items, null, 2);
//   fs.writeFileSync(generatedJsonPath, formatItems, "utf-8");
// };

let items: Item[] = JSON.parse(dr.stackToJSON());

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
  dr.pushData(newItem);
  res.send("recibido");
});

itemRouter.get("/api/items/delete/:id", (req: Request, res: Response) => {
  items = items.filter((item: Item) => item.id != req.params.id);
  res.send("eliminado");
});

itemRouter.get("/api/trending", (req: Request, res: Response) => {
  let response: Item[] = [];
  let i = 0;
  while (dr.popData() && i < 5) {
    response.push(dr.popData()!);
    i++;
  }
  res.json(response);
});

export { itemRouter };

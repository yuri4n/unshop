const { Router } = require("express");
const router = Router();
import fs from "fs";

let data = fs.readFileSync("./src/files/items.json", "utf-8");
let items = JSON.parse(data.toString());

router.route("/api").get((req: any, res: any) => {
  res.json("UNShop API");
});

router.get("/api/items", (req: any, res: any) => {
  res.json(items);
});

router.post("/api/items", (req: any, res: any) => {
  let { name, description, price } = req.body;
  const newItem = {
    name,
    description,
    price
  };
  items.push(newItem);
  const formatItems = JSON.stringify(items, null, 2);
  fs.writeFileSync("./src/files/items.json", formatItems, "utf-8");
  res.send("recibido");
});

export default router;

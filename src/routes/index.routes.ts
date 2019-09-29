const { Router } = require("express");
const router = Router();
import fs from "fs";

router.route("/api").get((req: any, res: any) => {
  res.json("UNShop API");
});

router.get("/api/items", (req: any, res: any) => {
  let data = fs.readFileSync("./src/files/items.json");
  let items = JSON.parse(data.toString());
  res.json(items);
});

export default router;

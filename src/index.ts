import { App } from "./app";
import { LinkedList } from "./Items/LinkedList";

async function main() {
  const app = new App();
  await app.listen();
}

main();

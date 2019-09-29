import { App } from "./app";

async function main() {
  const app = new App();
  await app.listen();

  // Routes
  app.routes();
}

main();

import express, { Application } from "express";

export class App {
  private app: Application;
  private port: Application;

  constructor() {
    this.app = express();

    this.app.set("port", process.env.PORT || 5000);
    this.port = this.app.get("port");
  }

  async listen() {
    await this.app.listen(this.port);
    console.log("✅  Server running on port:", this.port);
  }
}

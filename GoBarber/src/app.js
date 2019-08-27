//importacoes antes do sucrase:
//const express = require("express");
//const routes = require("./routes");

import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}
//module.exports = new App().server; ants do sucrase
export default new App().server;

import express from "express";
export class CommonRoutes {
  app: express.Application;
  name: string;
  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

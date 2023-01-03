import bodyParser from "body-parser";
import express from "express";
import { db, DB_Adress } from "./db/db.js";
import { routes } from "./routes/index.js";

const app = express();
const port = 3001;

app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.connect(DB_Adress);
  app.listen(port, () => {
    console.log("Server 3001 Portunda Çalışıyor");
  });
};

start();

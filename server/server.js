import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { routes } from "./routes/index.js";
import { db } from "./db/database.js";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); //for reacts

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.connect();
  app.listen(port, () => {
    console.log("Server 3001 Portunda Çalışıyor");
  });
};

start();

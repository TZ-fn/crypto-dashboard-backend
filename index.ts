import * as dotenv from "dotenv";
import express from "express";
import getData from "./getData.ts";
import routes from "./routes.ts";

dotenv.config();
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const PORT = process.env.PORT || 3001;

app.get(`/${routes.latest}`, async (_req, res) => {
  const data = await getData(COINMARKETCAP_API_KEY, routes.latest);
  if (data) {
    res.type("json").send(await data.json());
  }
});

app.get(`/${routes.meta}`, async (_req, res) => {
  const data = await getData(COINMARKETCAP_API_KEY, routes.meta);
  if (data) {
    res.type("json").send(await data.json());
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

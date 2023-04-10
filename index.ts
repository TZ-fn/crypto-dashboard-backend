import * as dotenv from "dotenv";
import express from "express";
import getData from "./getData.ts";
import routes from "./routes.ts";

dotenv.config();
const app = express();

const APIroutes = {
  latest: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  meta: "https://pro-api.coinmarketcap.com/v2/cryptocurrency/info",
};

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

app.get(`/${routes.meta}`, async (req, res) => {
  const queryID = req.query.id;
  const endpoint = `${routes.meta}?id=${queryID}`;
  const data = await getData(COINMARKETCAP_API_KEY, endpoint);
  if (data) {
    res.type("json").send(await data.json());
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

import * as dotenv from "dotenv";
import express from "express";
import getData from "./getData.ts";

dotenv.config();
const app = express();

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const PORT = process.env.PORT || 3001;

app.get("/", async (_req, res) => {
  const data = await getData(COINMARKETCAP_API_KEY);
  console.log(COINMARKETCAP_API_KEY);
  if (data) {
    res.type("json").send(await data.json());
  }
  console.log(data);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

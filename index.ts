import * as dotenv from "dotenv";
import express from "express";
import getData from "./getData.ts";

dotenv.config();
const app = express();

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const PORT = process.env.PORT || 3001;

app.get("/", async (_req, res) => {
  console.log("get");
  const data = await getData(COINMARKETCAP_API_KEY);
  if (data) {
    res.send(await data.json());
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

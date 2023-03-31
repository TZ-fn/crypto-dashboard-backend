import * as dotenv from "dotenv";
import express from "express";
import getData from "./getData.ts";

dotenv.config();
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

getData(COINMARKETCAP_API_KEY);

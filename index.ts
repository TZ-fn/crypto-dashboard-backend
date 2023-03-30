require("dotenv").config();

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

async function getData() {
  try {
    if (COINMARKETCAP_API_KEY !== undefined) {
      const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
        headers: {
          "X-CMC_PRO_API_KEY": COINMARKETCAP_API_KEY,
        },
      });
      const data = await response.json();
      console.log(data);
    }
  } catch (e) {}
}

getData();

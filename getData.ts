import fetch from "node-fetch";
import routes from "routes";

const APIroutes = {
  latest: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  meta: "https://pro-api.coinmarketcap.com/v2/cryptocurrency/info",
};

async function getData(APIkey: string | undefined, route: string) {
  try {
    if (APIkey !== undefined) {
      const response = await fetch(APIroutes[route], {
        headers: {
          "X-CMC_PRO_API_KEY": APIkey,
        },
      });
      return response;
    }
  } catch (e) {
    console.log(e);
  }
}

export default getData;

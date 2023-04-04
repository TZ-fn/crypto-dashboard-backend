import fetch from "node-fetch";
import routes from "routes";

const APIroutes = {
  latest: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
};

async function getData(APIkey: string | undefined, route: keyof typeof routes) {
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

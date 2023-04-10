import fetch from "node-fetch";

async function getData(APIkey: string | undefined, endpoint: string) {
  try {
    if (APIkey !== undefined) {
      const response = await fetch(endpoint, {
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

async function getData(APIkey: string | undefined) {
  try {
    if (APIkey !== undefined) {
      const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
        headers: {
          "X-CMC_PRO_API_KEY": APIkey,
        },
      });
      return response;
    }
  } catch (e) {}
}

export default getData;

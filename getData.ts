async function getData(APIkey: string | undefined) {
  try {
    if (APIkey !== undefined) {
      const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
        headers: {
          "X-CMC_PRO_API_KEY": APIkey,
        },
      });
      const data = await response.json();
      console.log(data);
    }
  } catch (e) {}
}

export default getData;

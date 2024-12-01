import { rapidAPIConfig } from "../../../config/api/rapidapi";

export async function getCoins(limit = 100, offset = 0) {
  const req = await fetch(
    `https://${rapidAPIConfig.BASE_CRYPTO_URL}/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=${limit}&offset=${offset}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": rapidAPIConfig.BASE_CRYPTO_URL,
        "x-rapidapi-key": rapidAPIConfig.CRYPTO_API_KEY,
      },
    }
  );
  const data = await req.json();
  return data.data.coins;
}

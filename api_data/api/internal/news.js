import { redis } from "../../../clients/redis";
import { rapidAPIConfig } from "../../../config/api/rapidapi";

// number of minutes after which the news expire.
const NEWS_EXPIRY_MINUTES = 10;

export async function getNews() {
  // if there's cache, serve the cache:
  const cache = await redis.get("news_cache");

  if (cache) {
    return JSON.parse(cache);
  }

  // if the cache is dead already, make a request to the api, and if successful, return the news and write to cache.
  const req = await fetch(
    `https://${rapidAPIConfig.BASE_NEWS_URL}/v1/cointelegraph`,
    {
      headers: {
        "x-rapidapi-host": rapidAPIConfig.BASE_NEWS_URL,
        "x-rapidapi-key": rapidAPIConfig.NEWS_API_KEY,
      },
    }
  );

  if (req.status === 200) {
    const data = await req.json();
    redis.set("news_cache", JSON.stringify(data.data), {
      EX: 60 * NEWS_EXPIRY_MINUTES,
    });
    return data.data;
  }

  // otherwise return empty array
  return [];
}

import { createClient } from "redis";
import { redisConfig } from "../../config/redis";

const client = createClient({ url: redisConfig.URL });

client.on("error", (err) => {
  throw new Error(err);
});

export const redis = await client.connect();

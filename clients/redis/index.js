import { createClient } from "redis";

const client = createClient({
  socket: {
    host: "127.0.0.1",
    port: 6379,
  },
});

client.on("error", (err) => {
  console.error("Redis client error:", err);
});

await client.connect();
export const redis = client;

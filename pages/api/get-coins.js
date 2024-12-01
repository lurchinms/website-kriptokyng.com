import { getCoins } from "../../util/api/internal/coins";

export default async function handler(req, res) {
  const { limit, offset } = req.query;
  res.status(200).json({ coins: await getCoins(limit ?? 100, offset ?? 0) });
}


import { getNews } from "../../util/api/internal/news";

export default async function handler(req, res) {
  res.status(200).json({ data: await getNews(req.query.coin) });
}


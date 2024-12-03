import { NewsCard } from "./news-card";

export function NewsGridItem({ article }) {
  return (
    <NewsCard
      src={article.thumbnail}
      text={article.description.slice(0, 150) + "..."}
      label={article.title}
      path={article.url}
    />
  );
}

import { getCollection } from "astro:content";
import { isPonyMode } from "./site";

export { isPonyMode } from "./site";

export function getNewsId(entry: { id: string }) {
  return entry.id.split("/").at(-1)?.replace(/\.mdx?$/, "") ?? entry.id;
}

export function getNewsUrl(entry: { id: string; data: { year: number } }) {
  return `/news/${entry.data.year}/${getNewsId(entry)}`;
}

export function shouldShowNewsArticle(entry: { data: { pony: boolean } }) {
  return isPonyMode() || !entry.data.pony;
}

export async function getAllNewsArticles() {
  const articles = await getCollection("news");

  return articles.sort((a, b) => {
    const dateDifference =
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime();

    if (dateDifference !== 0) {
      return dateDifference;
    }

    return getNewsId(b).localeCompare(getNewsId(a));
  });
}

export async function getNewsYears() {
  const articles = await getAllNewsArticles();

  return [...new Set(articles.map((article) => article.data.year))].sort(
    (a, b) => b - a
  );
}

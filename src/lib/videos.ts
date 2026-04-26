import { getCollection } from "astro:content";
import { isPonyMode } from "./site";

export function getVideoId(entry: { id: string }) {
  return entry.id.split("/").at(-1)?.replace(/\.mdx?$/, "") ?? entry.id;
}

export function getVideoUrl(entry: { id: string; data: { year: number } }) {
  return `/videos/${entry.data.year}/${getVideoId(entry)}`;
}

export function shouldShowVideo(entry: { data: { pony: boolean } }) {
  return isPonyMode() || !entry.data.pony;
}

export async function getAllVideos() {
  const videos = await getCollection("videos");

  return videos.sort((a, b) => {
    const dateDifference =
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime();

    if (dateDifference !== 0) {
      return dateDifference;
    }

    return getVideoId(b).localeCompare(getVideoId(a));
  });
}

export function getVideoYearsFrom(videos: { data: { year: number } }[]) {
  return [...new Set(videos.map((video) => video.data.year))].sort(
    (a, b) => b - a
  );
}

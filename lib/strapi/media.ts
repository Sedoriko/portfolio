import { getStrapiURL } from "./api";

export const getStrapiMedia = (media: { url: string }) => {
  const imageUrl = media.url.startsWith("/") ? getStrapiURL(media.url) : media.url;
  return imageUrl;
};

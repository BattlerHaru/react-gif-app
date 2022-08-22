import { getEnv } from "./getEnv";

export const getGifs = async (category) => {
  let apiKey = getEnv().VITE_GIPHY_API_KEY;

  const limit = 5;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

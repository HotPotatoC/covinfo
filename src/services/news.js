import axios from "axios";

const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_NEWS_URL,
});

const apiKey = process.env.VUE_APP_NEWS_API_KEY;

export async function fetchNews() {
  const virus = await request.get(
    `/top-headlines?country=id&q=virus&apiKey=${apiKey}`
  );

  const newnormal = await request.get(
    `/top-headlines?country=id&q=new normal&apiKey=${apiKey}`
  );

  return [...virus.data.articles, ...newnormal.data.articles];
}

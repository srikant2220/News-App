const API_KEY = "RGCwHBwQtHEW8hzaZiwpmLo9Deh3wsUBxGFxmEbU";
//require("dotenv").config();
export const fetchNews = async (category = "general", page = 1) => {
  const response = await fetch(
    `https://api.thenewsapi.com/v1/news/top?api_token=${API_KEY}&locale=in&categories=${category}&page=${page}&limit=6`
  );

  const data = await response.json();
  return data;
};


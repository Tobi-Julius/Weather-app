import ForecastApi from "./ForecastApi";

export const weatherOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1b0fbba980msh8fdacad0eff3953p1bf280jsn7c9c1dcbf614",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const fetchData = async (url, option) => {
  const response = await ForecastApi.get(url, option);
  const data = response.data;

  return data;
};

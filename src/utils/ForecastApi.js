import axios from "axios";

export default axios.create({
  baseURL: "https://weatherapi-com.p.rapidapi.com",
});

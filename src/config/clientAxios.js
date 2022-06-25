import axios from "axios";

export const clientAxios = axios.create({
  baseURL: "https://yamichan.us-3.evennode.com/",
  //baseURL:"http://localhost:4000"
});

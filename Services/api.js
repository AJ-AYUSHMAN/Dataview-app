import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com/products"
});

export const getItems = () => API.get("/posts");
export const getItem = (id) => API.get(`/posts/${id}`);

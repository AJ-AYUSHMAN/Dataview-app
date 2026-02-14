import axios from "axios";

// product API
export const productAPI = axios.create({
  baseURL: "https://dummyjson.com"
});

// local json db API
export const localAPI = axios.create({
  baseURL: "http://10.0.2.2:3000" // android emulator
});

// products
export const getProducts = () => productAPI.get("/products");
export const getProductById = (id) => productAPI.get(`/products/${id}`);

// local form items
export const getLocalItems = () => localAPI.get("/items");
export const createLocalItem = (data) => localAPI.post("/items", data);

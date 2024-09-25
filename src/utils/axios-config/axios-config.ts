import axios from "axios";

const api = "https://ecommerce-api-three-peach.vercel.app";

export const instance = axios.create({
  baseURL: api,
  headers: {
    "Content-Type": "application/json",
  },
});

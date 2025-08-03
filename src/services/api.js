import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com", // or your real API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

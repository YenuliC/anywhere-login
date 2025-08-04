import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com", // or your real API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle tokens
api.interceptors.response.use(
  (response) => {
    // If the response contains tokens, store them
    if (response.data && response.data.token) {
      localStorage.setItem("accessToken", response.data.token);
    }
    if (response.data && response.data.refreshToken) {
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }
    return response;
  },
  (error) => {
    // Handle 401 errors and token refresh logic here if needed
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
    return Promise.reject(error);
  }
);

export default api;

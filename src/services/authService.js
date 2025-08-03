import api from "./api";

export const loginUser = async (username, password) => {
  const response = await api.post("/auth/login", {
    username,
    password,
    expiresInMins: 30, // optional
  });

  return response.data;
};

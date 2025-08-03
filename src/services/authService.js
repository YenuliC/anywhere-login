import api from "./api";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    username: email,
    password: password,
    expiresInMins: 30
  });

  return response.data;
};

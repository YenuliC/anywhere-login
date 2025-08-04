import api from "./api";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    username: email,
    password: password,
    expiresInMins: 30
  });

  return response.data;
};

export const signup = async (firstName, lastName, email, password) => {
  const response = await api.post("/auth/signup", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  });

  return response.data;
};

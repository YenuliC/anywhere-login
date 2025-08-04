import api from "./api";

export const login = async (username, password) => {
  const response = await api.post("/auth/login", {
    username: username,
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

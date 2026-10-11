import api from "./api";

export const loginUser = async (loginData) => {
  return api.post("/login", loginData);
};
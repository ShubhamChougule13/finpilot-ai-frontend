import api from "./api";

export const getDashboardData = async () => {

  const token = localStorage.getItem("token");

  return api.get("/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
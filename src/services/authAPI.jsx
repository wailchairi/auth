// src/services/authAPI.js
import axios from "axios";


const API = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: { "Content-Type": "application/json" },
});


// 1. Login and receive access/refresh tokens
export const loginUser = async ({ username, password }) => {
  const res = await API.post("auth/login", {
    username,
    password,
    expiresInMins: 5, // optional
  });

  const data = res.data;
  
  return {
    token: data.accessToken,
    refreshToken: data.refreshToken,
    user: {
      id: data.id,
      email: data.email,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      image: data.image,
    },
  };
};


// 2. Get current logged-in user using access token
export const getUserInfo = async (token) => {
  const res = await API.get("auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// 3. (Optional) Refresh session using refresh token
export const refreshSession = async (refreshToken) => {
  const res = await API.post("auth/refresh", {
    refreshToken,
    expiresInMins: 30,
  });

  return {
    accessToken: res.data.accessToken,
    refreshToken: res.data.refreshToken,
  };
};
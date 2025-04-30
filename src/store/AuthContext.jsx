import { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../services/authAPI";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);

  // ✅ Login
  const login = async (username, password) => {
    const data = await loginUser({ username, password });

    // 🧠 Defensive check — only set token if it's valid
    if (data.token && data.token !== "undefined") {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    }
    
    

    if (data.refreshToken) {
      localStorage.setItem("refreshToken", data.refreshToken);
      setRefreshToken(data.refreshToken);
    }

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    }

    navigate("/home", { replace: true });
  };

  // 🔓 Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    setToken(null);
    setRefreshToken(null);
    setUser(null);

    navigate("/");
  };

  // 🔁 Rehydrate from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedRefreshToken = localStorage.getItem("refreshToken");

    // ✅ Validate token
    if (storedToken && storedToken !== "undefined" && storedToken !== "null") {
      const decoded = jwtDecode(storedToken);
      const now = Date.now() / 1000;
  
      if (decoded.exp < now) {
        logout(); // Optional: force logout
      } else {
        setToken(storedToken);
      }
    }

    if (storedRefreshToken && storedRefreshToken !== "undefined") {
      setRefreshToken(storedRefreshToken);
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse stored user", err);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState, useEffect } from "react";
import { loginUser} from "../services/authAPI"; // 🧠 getUserInfo added for /auth/me
import { useNavigate } from "react-router-dom";

// Create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // State
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem("refreshToken"));
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // ✅ Login (username + password for DummyJSON)
  const login = async (username, password) => {
    const data = await loginUser({ username, password });

    // Save tokens
    localStorage.setItem("token", data.token);
    localStorage.setItem("refreshToken", data.refreshToken); // 🧠 save refreshToken
    localStorage.setItem("user", JSON.stringify(data.user));

    setToken(data.token);
    setRefreshToken(data.refreshToken);
    setUser(data.user);

    navigate("/home", { replace: true }); // Redirect to home page after login
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

  // 🧠 Restore state from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedRefreshToken = localStorage.getItem("refreshToken");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setRefreshToken(storedRefreshToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Shortcut hook
export const useAuth = () => useContext(AuthContext);

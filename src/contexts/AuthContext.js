import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get("/users/me");
          setUser(resMe.data.user);
        }
      } catch (err) {
        removeAccessToken();
        navigate("/login");
      }
    };
    fetchMe();
  }, []);

  const signUp = async (input) => {
    const res = await axios.post("/auth/register", input);
    setAccessToken(res.data.token);
    const resMe = await axios.get("/users/me");
    setUser(resMe.data.user);
  };

  const login = async (userName, password) => {
    const res = await axios.post("/auth/login", { userName, password });
    setAccessToken(res.data.token);
    const resMe = await axios.get("/users/me");
    setUser(resMe.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signUp, logout, login, user }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };

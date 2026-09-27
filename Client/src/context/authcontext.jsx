import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(``);
  const [loading, setLoading] = useState(true);
  const rootUrl = "http://localhost:3000";

  const checkAuth = async () => {
    try {
      const response = await axios.get(`${rootUrl}/api/auth/me`, {
        withCredentials: true,
      });

      setUser(response.data.user);
    } catch (err) {
      setUser('');
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData) => {
    try {
      const response = await axios.post(
        `${rootUrl}/api/auth/register`,
        formData,
        { withCredentials: true },
      );
      console.log(response.data);
      setUser(response.data.user);
      return;
    } catch (err) {
      console.log("User Register falid", err);
    }
  };

  const login = async (formData) => {
    try {
      const response = await axios.post(`${rootUrl}/api/auth/login`, formData, {
        withCredentials: true,
      });
      setUser(response.data.user);
      return response.data;
    } catch (err) {
      console.log("login faild", err);
      return err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        register,
        login,
        checkAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

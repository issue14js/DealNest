import axios from "axios";
import { createContext, useEffect, useState } from "react";

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
      setUser("");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  const register = async (formData) => {
    try {
      const response = await axios.post(
        `${rootUrl}/api/auth/register`,
        formData,
        { withCredentials: true },
      );

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
      throw err;
    }
  };
  const logout = async () => {
    try {
      const resposne = await axios.post(
        `${rootUrl}/api/auth/logout`,
        {},
        { withCredentials: true },
      );
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };
  const updateProfile = async (formData) => {
    try {
      const resposne = await axios.put(
        `${rootUrl}/api/auth/updateuser`,
        formData,
        { withCredentials: true },
      );
      setUser(resposne.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  const changeDp = async (file) => {
    try {
      const formData = new FormData();

      formData.append("avatar", file);

      const response = await axios.patch(
        `${rootUrl}/api/auth/updateavatar`,
        formData,
        { withCredentials: true },
      );

      setUser((prev) => ({
        ...prev,
        avatar: response.data.user.avatar,
      }));
    } catch (err) {
      console.log(err);
    }
  };
  const changePassword = async (data) => {
    try {
      const response = await axios.patch(
        `${rootUrl}/api/auth/updatepassword`,
        data,
        { withCredentials: true },
      );
    } catch (err) {
      console.log(err);
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
        logout,
        checkAuth,
        updateProfile,
        changeDp,
        rootUrl,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

const Auth = createContext(null);

export const AuthProvider = ({ children }) => {
  let router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const hydrateUser = useCallback(async () => {
    try {
      const res = await api.get("/api/auth/me");

      // Supports { user: {...} } or a direct user object.
      const currentUser = res.data?.user ?? res.data;
      console.log("Current user:", currentUser);
      setUser(currentUser);
      return currentUser;
      router.push("/layout/home");
    } catch (err) {
      setUser(null);

      if (err.response?.status !== 401) {
        console.error(
          "Error fetching current user:",
          err.response?.data || err.message
        );
      }

      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    hydrateUser();
  }, [hydrateUser]);

  return (
    <Auth.Provider
      value={{
        user,
        setUser,
        loading,
        hydrateUser,
        refreshUser: hydrateUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(Auth);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};

import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { toast } from "react-toastify";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),

      login: async ({ email, password }) => {
        try {
          const res = await axios.post(
            "https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token",
            { email, password, isEmployee: true }
          );

          const { token } = res.data;
          set({ token });

          const userRes = await axios.get(
            "https://api-yeshtery.dev.meetusvr.com/v1/user/info",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          set({ user: userRes.data });

          toast.success("Login successful!");
          return { success: true };
        } catch {
          toast.error("Invalid email or password.");
          return { success: false };
        }
      },

      logout: () => {
        set({ token: null, user: null });
        toast.info("Logged out successfully.");
      },
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);

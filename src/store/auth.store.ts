import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  hydrated: boolean;
  setTokens: (a: string, r: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      hydrated: false,

      setTokens: (a, r) => set({ accessToken: a, refreshToken: r }),
      logout: () => set({ accessToken: null, refreshToken: null }),
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => () => {
        useAuthStore.setState({ hydrated: true });
      },
    },
  ),
);

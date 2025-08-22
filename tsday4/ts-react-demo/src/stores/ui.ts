import { create } from "zustand";
import { persist } from 'zustand/middleware';

export interface UiState {
  theme: "light" | "dark",
  user: { id: number, name: string } | null
}

export interface UiAction {
  toggleTheme: () => void;
  login: () => void;
  logout: () => void;
  reset: () => void;
}

export type UiStore = UiState & UiAction;

const initial: UiState = { theme: "light", user: null };

export const useUi = create<UiStore>()(
  persist(
    (set) => ({
      ...initial,
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),

      login: () => set({ user: { id: 1, name: "Alice" } }),
      logout: () => set({ user: null }),
      reset: () => set(initial),
    }),
    {
      name: "ui-store",
      partialize: (s) => ({ theme: s.theme })
    }
  )

);


import { create } from "zustand";
import type { ToggleState } from "../types/toggle";

export const useToggleStore = create<ToggleState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
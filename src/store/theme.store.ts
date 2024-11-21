"use client";
import { create } from "zustand";

type Store = {
	isDark: boolean;
	activeDarkMode: () => void;
	removeDarkMode: () => void;
};

export const useThemeStore = create<Store>()((set) => ({
	isDark: false,
	activeDarkMode: () => {
		localStorage.setItem("theme", "dark");
		set(() => ({ isDark: true }));
	},
	removeDarkMode: () => {
		localStorage.removeItem("theme");
		set(() => ({ isDark: false }));
	},
}));

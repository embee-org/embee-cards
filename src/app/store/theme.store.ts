import { create } from "zustand";

type Store = {
	isDark: boolean;
	activeDarkMode: () => void;
	removeDarkMode: () => void;
};

const html = document.querySelector("html") as HTMLElement;

export const useThemeStore = create<Store>()((set) => ({
	isDark: false,
	activeDarkMode: () => {
		localStorage.setItem("theme", "dark");
		html.classList.add("dark");
		set(() => ({ isDark: true }));
	},
	removeDarkMode: () => {
		localStorage.removeItem("theme");
		html.removeAttribute("class");
		set(() => ({ isDark: false }));
	},
}));

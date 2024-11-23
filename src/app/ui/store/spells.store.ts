import { create } from "zustand";

type Store = {
	leftIcon: string;
	rightIcon: string;
	changeLeftIcon: (icon: string) => void;
	changeRightIcon: (icon: string) => void;
};

const initialState = {
	leftIcon: localStorage.getItem("leftIcon") || "flash.jpg",
	rightIcon: localStorage.getItem("rightIcon") || "ignite.jpg",
};

export const useSpellStore = create<Store>()((set) => ({
	...initialState,
	changeLeftIcon: (icon: string) =>
		set((state) => {
			localStorage.setItem("leftIcon", icon);
			return { ...state, leftIcon: icon };
		}),
	changeRightIcon: (icon: string) =>
		set((state) => {
			localStorage.setItem("rightIcon", icon);
			return { ...state, rightIcon: icon };
		}),
}));

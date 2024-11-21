/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { useThemeStore } from "@/store";
import { useEffect } from "react";

export function useThemeHook() {
	const { isDark, activeDarkMode, removeDarkMode } = useThemeStore();

	useEffect(() => {
		const data = localStorage.getItem("theme");

		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		const isDark = data === "dark" || (prefersDarkMode && !data);
		isDark ? changeToDark() : changeToLight();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const changeToDark = () => {
		const htmlElement = document.querySelector("html") as HTMLElement;
		htmlElement.removeAttribute("class");
		htmlElement.classList.add("dark");
		activeDarkMode();
	};

	const changeToLight = () => {
		const htmlElement = document.querySelector("html") as HTMLElement;
		htmlElement.removeAttribute("class");
		removeDarkMode();
	};

	const changeTheme = () => (isDark ? changeToLight() : changeToDark());

	return {
		dark: isDark,
		changeTheme,
	};
}

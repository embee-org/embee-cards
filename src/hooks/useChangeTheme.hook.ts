"use client";
import { useEffect, useState } from "react";

export function useChangeThemeHook() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const data = localStorage.getItem("theme");
		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		if (data === "dark" || (prefersDarkMode && !data)) {
			changeToDark();
			setDark(true);
		}
	}, []);

	const changeToDark = () => {
		localStorage.setItem("theme", "dark");
		const htmlElement = document.querySelector("html") as HTMLElement;
		htmlElement.classList.add("dark");
		setDark(true);
	};

	const changeToLight = () => {
		localStorage.removeItem("theme");
		const htmlElement = document.querySelector("html") as HTMLElement;
		htmlElement.removeAttribute("class");
		setDark(false);
	};

	const changeTheme = () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		dark ? changeToLight() : changeToDark();
	};

	return {
		dark,
		changeTheme,
	};
}

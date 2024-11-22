/* eslint-disable @typescript-eslint/no-unused-expressions */
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

	const changeToDark = () => activeDarkMode();

	const changeToLight = () => removeDarkMode();

	const changeTheme = () => (isDark ? changeToLight() : changeToDark());

	return {
		dark: isDark,
		changeTheme,
	};
}

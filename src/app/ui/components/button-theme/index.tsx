import { useThemeHook } from "@/ui/hooks";
import { useEffect, useRef, useState } from "react";

const ImageDark = () => {
	return (
		<img
			src="/imgs/remera-t1-2023.png"
			alt="Moon icon"
			width={40}
			height={52.5}
		/>
	);
};

const ImageLight = () => {
	return (
		<img
			src="/imgs/remera-t1-2024.png"
			alt="Sun icon"
			width={40}
			height={52.5}
		/>
	);
};

export function ButtonTheme() {
	const { dark, changeTheme } = useThemeHook();
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="bg-t1-primary dark:bg-t1-primary-dark rounded-lg gap-4 flex items-center relative"
		>
			<button type="button" onClick={() => setOpen(!open)}>
				{dark ? <ImageDark /> : <ImageLight />}
			</button>
			<div
				className={`absolute ${
					open ? "flex flex-col" : "hidden"
				} bg-gray-50 dark:bg-gray-950 top-[100%] left-0`}
			>
				<button type="button" onClick={changeTheme}>
					{dark ? <ImageLight /> : <ImageDark />}
				</button>
			</div>
		</div>
	);
}

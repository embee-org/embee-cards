"use client";
import { BASE_HREF } from "@/consts/url";
import { useThemeHook } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonTheme } from "../button-theme";
import { HomeIcon, RankingIcon } from "../svgs";

export function Navbar() {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const isRanking = pathname === "/ranking";
	const { dark } = useThemeHook();

	return (
		<nav className="bg-neutral-50 dark:bg-gray-950 flex items-center justify-around gap-2 p-4 h-fit w-full">
			<Image
				className="aspect-w-[16] aspect-h-[9]"
				src={`${BASE_HREF}/logos/t1.png`}
				width={50}
				height={50}
				alt="Avatar abejajayz"
			/>
			<Link
				href="/"
				className={`${
					isHome
						? "text-t1-secondary"
						: "text-t1-primary dark:text-t1-primary-dark"
				} flex items-center gap-4 font-bold hover:opacity-80`}
			>
				<HomeIcon
					colors={{
						primary: isHome ? "#af9660" : dark ? "#DB1A23ff" : "#831415ff",
						secondary: "transparent",
					}}
					height={35}
					width={35}
				/>
				Inicio
			</Link>
			<Link
				href="/ranking"
				className={`${
					isRanking
						? "text-t1-secondary"
						: "text-t1-primary dark:text-t1-primary-dark"
				} flex items-center gap-4 font-bold hover:opacity-80`}
			>
				<RankingIcon
					height={30}
					width={30}
					colors={{
						primary: isRanking ? "#af9660" : dark ? "#DB1A23ff" : "#831415ff",
						secondary: "transparent",
					}}
				/>
				Clasificatoria
			</Link>
			<ButtonTheme />
		</nav>
	);
}

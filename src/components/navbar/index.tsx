"use client";
import { BASE_HREF } from "@/consts/url";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonTheme } from "../button-theme";
import { HomeIcon, RankingIcon } from "../svgs";

export function Navbar() {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const isRanking = pathname === "/ranking";

	return (
		<nav className="bg-neutral-50 dark:bg-gray-950 flex items-center gap-2 p-4 h-fit w-full">
			<Image
				className="aspect-w-[16] aspect-h-[9]"
				src={`${BASE_HREF}/logos/t1.png`}
				width={50}
				height={50}
				alt="Avatar abejajayz"
			/>
			<div className="flex items-center justify-evenly w-full">
				<Link
					href="/"
					className={`${
						isHome ? "text-yellow-500" : "text-red-600"
					} flex items-center gap-4 font-bold hover:opacity-80`}
				>
					<HomeIcon
						colors={{
							primary: isHome ? "rgb(234, 179, 8)" : "rgb(220, 38, 38)",
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
						isRanking ? "text-yellow-500" : "text-red-600"
					} flex items-center gap-4 font-bold hover:opacity-80`}
				>
					<RankingIcon
						height={30}
						width={30}
						colors={{
							primary: isRanking ? "rgb(234, 179, 8)" : "rgb(220, 38, 38)",
							secondary: "transparent",
						}}
					/>
					Clasificatoria
				</Link>
				<ButtonTheme />
			</div>
		</nav>
	);
}

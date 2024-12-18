import { HomeIcon, RankingIcon } from "@/ui/components/svgs";
import { useThemeHook } from "@/ui/hooks";
import { ButtonTheme } from "@/ui/store-components/button-theme";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
	const pathname = useLocation().pathname.split("?")[0];
	const isHome = pathname === "/";
	const isRanking = pathname === "/ranking";
	const { dark } = useThemeHook();

	return (
		<nav className="bg-neutral-50 dark:bg-gray-950 flex items-center justify-around gap-2 p-4 h-fit w-full">
			<img
				className="aspect-w-[16] aspect-h-[9]"
				src="https://embee-org.github.io/embee-statics/logos/t1.png"
				width={50}
				height={50}
				alt="Avatar abejajayz"
			/>
			<Link
				to="/"
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
				to="/ranking"
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

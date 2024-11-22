import { Navbar } from "@/components/navbar";
import { TitlePage } from "@/components/title-page";

export function Header() {
	return (
		<header className="flex flex-col items-center mb-4 w-full">
			<Navbar />
			<div className="flex items-center justify-center gap-6">
				<img
					loading="eager"
					className="rounded-full"
					src="/imgs/avatar-embee.jpg"
					width={100}
					height={100}
					alt="Avatar embeejayz"
				/>
				<TitlePage />
			</div>
		</header>
	);
}

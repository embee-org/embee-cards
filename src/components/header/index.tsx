import { BASE_HREF } from "@/consts/url";
import Image from "next/image";
import { Navbar } from "../navbar";
import { TitlePage } from "../title-page";

export function Header() {
	return (
		<header className="flex flex-col items-center mb-4 w-full">
			<Navbar />
			<div className="flex items-center justify-center gap-6">
				<Image
					className="rounded-full"
					src={`${BASE_HREF}/imgs/avatar-embee.jpg`}
					width={100}
					height={100}
					alt="Avatar embeejayz"
				/>
				<TitlePage />
			</div>
		</header>
	);
}

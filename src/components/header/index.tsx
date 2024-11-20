import { BASE_HREF } from "@/consts/url";
import Image from "next/image";
import { Navbar } from "../navbar";

export function Header() {
	return (
		<header className="flex flex-col items-center mb-4 w-full">
			<Navbar />
			<div className="flex items-center justify-center gap-6">
				<Image
					src={`${BASE_HREF}/imgs/abejajayz.png`}
					width={100}
					height={100}
					alt="Avatar abejajayz"
				/>
				<h1 className="font-extrabold font-sans text-3xl text-red-600">
					Embeejayz cartas
				</h1>
			</div>
		</header>
	);
}

"use client";

import { usePathname } from "next/navigation";

export function TitlePage() {
	const pathname = usePathname();

	const getTitle = () => {
		if (pathname === "/") return "Inicio";
		if (pathname === "/ranking") return "Clasificatoria";
		return "Cartas";
	};

	return (
		<h1 className="font-extrabold font-sans text-3xl text-t1-secondary">
			{getTitle()}
		</h1>
	);
}

import { useLocation } from "react-router-dom";

export function TitlePage() {
	const location = useLocation();

	const getTitle = () => {
		const pathname = location.pathname.split("?")[0];
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

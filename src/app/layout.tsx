import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "@fontsource-variable/montserrat";
import "@fontsource/poppins";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Embee cartas",
	description:
		"Cartas de Embeejayz basadas en T1, League of legends y su stream",
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang="es">
			<body className="bg-gray-50 dark:bg-gray-950 text-yellow-600 grid grid-flow-row grid-rows-[auto_1fr_auto] h-screen w-full">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

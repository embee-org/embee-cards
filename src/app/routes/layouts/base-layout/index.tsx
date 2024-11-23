import { Footer } from "@/shared/components/footer";
import { Header } from "@/shared/components/header";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
	return (
		<div className="bg-white dark:bg-gray-950 text-t1-secondary grid grid-flow-row grid-rows-[auto_1fr_auto] min-h-screen w-full">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

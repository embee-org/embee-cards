import { router } from "@/routes/router";
import { RouterProvider } from "react-router-dom";
import "./app.module.css";

export function App() {
	return (
		<RouterProvider
			future={{
				v7_startTransition: true,
			}}
			router={router}
		/>
	);
}

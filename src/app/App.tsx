import { router } from "@/routes/router";
import { RouterProvider } from "react-router-dom";
import "./app.module.css";

export function App() {
	return <RouterProvider router={router} />;
}

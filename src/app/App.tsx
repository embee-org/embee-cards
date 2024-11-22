import { RouterProvider } from "react-router-dom";
import "./app.module.css";
import { router } from "./router";

export function App() {
	return <RouterProvider router={router} />;
}

import "@fontsource-variable/montserrat";
import "@fontsource/poppins";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App.tsx";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
);

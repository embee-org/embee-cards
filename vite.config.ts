import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: [
			{
				find: "@",
				replacement: path.resolve(__dirname, "src/app"),
			},
		],
	},
});
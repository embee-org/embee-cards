import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/",
	images: {
		domains: [
			"static-cdn.jtvnw.net",
			"media1.giphy.com",
			"cdna.artstation.com",
		],
		remotePatterns: [],
	},
};

export default nextConfig;

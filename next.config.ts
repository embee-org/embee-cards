import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/embee-cards",
	images: {
		domains: ["static-cdn.jtvnw.net"],
		remotePatterns: [],
	},
};

export default nextConfig;

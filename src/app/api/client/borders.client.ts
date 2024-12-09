import { BordersResponse } from "@/api/models/interfaces";

export const getBordersClient = async (): Promise<BordersResponse> => {
	const res = await fetch(
		"https://embee-org.github.io/embee-statics/data/borders.json",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	const data = await res.json();

	if (!res.ok) throw new Error("Failed to fetch borders");

	return {
		borders: data.borders,
	};
};

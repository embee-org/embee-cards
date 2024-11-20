import { BASE_HREF } from "@/consts/url";

export const getCards = async () => {
	const res = await fetch(`${BASE_HREF}/data/cards.json`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await res.json();

	if (!res.ok) throw new Error("Failed to fetch cards");

	return data;
};

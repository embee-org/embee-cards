import { Card } from "@/models/interfaces";

export const getCards = async (): Promise<{ cards: Card[] }> => {
	const res = await fetch(`/data/cards.json`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await res.json();

	if (!res.ok) throw new Error("Failed to fetch cards");

	return data;
};

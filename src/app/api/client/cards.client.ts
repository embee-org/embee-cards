import { CardsResponse } from "@/api/models/interfaces";

export const getCardsClient = async (): Promise<CardsResponse> => {
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

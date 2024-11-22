import { getCardsClient, getUsersClient } from "@/api/client";
import { CardsResponse } from "@/api/models/interfaces";

export const getCards = async (): Promise<CardsResponse> => getCardsClient();

export const getCardsByUser = async ({ id }: { id: string }) => {
	const { users } = await getUsersClient();
	const user = users.find((user) => user.id === id);
	if (!user) throw new Error("User not found");

	const { cards } = await getCardsClient();

	return {
		cards: cards.filter((card) => user.cards.includes(card.id)),
	};
};

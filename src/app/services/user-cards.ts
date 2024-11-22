import { getCards } from "./cards";
import { getUsersData } from "./users";

export const getCardsByUser = async ({ id }: { id: string }) => {
	const { users } = await getUsersData();
	const user = users.find((user) => user.id === id);
	if (!user) throw new Error("User not found");

	const { cards } = await getCards();

	return {
		cards: cards.filter((card) => user.cards.includes(card.id)),
	};
};

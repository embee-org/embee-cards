import { User, UserRank } from "@/models/interfaces";

export const getUsersData = async (): Promise<{
	users: User[];
}> => {
	const res = await fetch("/cards/data/users.json", {
		method: "GET",
	});

	const data = await res.json();

	if (!res.ok) throw new Error("Failed to fetch users");

	return data;
};

export const getUsersRanking = async (): Promise<{ users: UserRank[] }> => {
	const { users } = await getUsersData();

	const sortedUsers = users.sort(
		(a, b) => b.cards.length - a.cards.length
	) as UserRank[];

	let rank = 0;

	for (let i = 0; i < sortedUsers.length; i++) {
		if (
			i > 0 &&
			sortedUsers[i].cards.length === sortedUsers[i - 1].cards.length
		) {
			sortedUsers[i].rank = rank;
			continue;
		}
		rank = rank + 1;
		sortedUsers[i].rank = rank;
	}

	return {
		users: sortedUsers,
	};
};

import { User } from "@/api/models/interfaces";

export const getUsersClient = async (): Promise<{
	users: User[];
}> => {
	const res = await fetch(
		"https://embee-org.github.io/embee-statics/data/users.json",
		{
			method: "GET",
		}
	);

	const data = await res.json();

	if (!res.ok) throw new Error("Failed to fetch users");

	return data;
};

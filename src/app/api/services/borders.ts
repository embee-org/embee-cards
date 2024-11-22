import { getBordersClient, getUsersClient } from "@/api/client";
import { BordersResponse } from "@/api/models/interfaces";

export const getBorders = async (): Promise<BordersResponse> =>
	getBordersClient();

export const getBordersByUser = async ({ id }: { id: string }) => {
	const { users } = await getUsersClient();
	const user = users.find((user) => user.id === id);
	if (!user) throw new Error("User not found");

	const { borders } = await getBordersClient();

	return {
		borders: borders.filter((border) => user.borders.includes(border.id)),
	};
};

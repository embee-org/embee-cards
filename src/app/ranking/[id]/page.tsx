import { BasePage } from "@/components/base-page";
import { getUsersData } from "@/services";
import { GetStaticPaths } from "next";

export const GetStaticParams = (async () => {
	return {
		paths: (await getUsersData()).users.map((user) => ({
			params: { id: user.id },
		})),
		fallback: true,
	};
}) satisfies GetStaticPaths;

type Props = {
	params: Promise<{ id: string }>;
};

export default async function UserRankingPage({ params }: Props) {
	const id = (await params).id;

	return (
		<BasePage className="flex flex-col items-center">Usuario: {id}</BasePage>
	);
}

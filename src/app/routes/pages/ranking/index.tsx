import { BasePage } from "@/ui/components/base-page";
import { useUsersRankHook } from "@/ui/hooks";
import { ListRanking } from "@/ui/store-components/list-ranking";
import { useUsersStore } from "@/ui/store/user.store";

export default function RankingPage() {
	useUsersRankHook();
	const loading = useUsersStore((state) => state.loading);
	const error = useUsersStore((state) => state.error);

	return (
		<BasePage className="flex flex-col items-center">
			{loading && <p>Loading...</p>}
			{error && <p>Error: {String(error)}</p>}
			{!loading && !error && <ListRanking />}
		</BasePage>
	);
}

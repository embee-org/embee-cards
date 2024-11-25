import { BasePage } from "@/shared/components/base-page";
import { ListRanking } from "@/ui/components/list-ranking";
import { useUsersRankHook } from "@/ui/hooks";
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

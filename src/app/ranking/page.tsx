import { BasePage } from "@/components/base-page";
import { ListRanking } from "@/components/list-ranking";

export default function RankingPage() {
	return (
		<BasePage className="flex flex-col items-center">
			<ListRanking />
		</BasePage>
	);
}

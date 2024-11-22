import { BasePage } from "@/shared/components/base-page";
import { ListRanking } from "@/ui/components/list-ranking";

export default function RankingPage() {
	return (
		<BasePage className="flex flex-col items-center">
			<ListRanking />
		</BasePage>
	);
}

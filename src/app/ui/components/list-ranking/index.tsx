import { PreviewRanking } from "@/shared/components/preview-ranking";
import { rankMapper } from "@/shared/mappers";
import { useUsersRankHook } from "@/ui/hooks/useUsersRank.hook";

export function ListRanking() {
	const { data } = useUsersRankHook();

	return (
		<ul className="w-[600px] max-w-[80vw]">
			{data.map((user) => (
				<li key={user.id}>
					<PreviewRanking
						username={user.username}
						id={user.id}
						rank={rankMapper(user.rank)}
						quantity={user.borders.length}
					/>
				</li>
			))}
		</ul>
	);
}

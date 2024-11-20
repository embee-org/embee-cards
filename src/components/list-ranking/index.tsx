"use client";
import { useUserRankHook } from "@/hooks/useUserRank.hook";
import { rankMapper } from "@/mappers";
import { PreviewRanking } from "../preview-ranking";

export function ListRanking() {
	const { data } = useUserRankHook();

	return (
		<ul className="w-[600px] max-w-[80vw]">
			{data.map((user) => (
				<PreviewRanking
					key={user.id}
					username={user.username}
					id={user.id}
					rank={rankMapper(user.rank)}
					quantity={user.cards.length}
				/>
			))}
		</ul>
	);
}

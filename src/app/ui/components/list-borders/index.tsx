import { Rank } from "@/api/models/enums";
import { UserRank } from "@/api/models/interfaces";
import {
	BorderBronze,
	BorderChallenger,
	BorderDiamond,
	BorderGold,
	BorderMaster,
	BorderPlatinium,
	BorderSilver,
} from "@/shared/components/borders";
import { useBordersByUser } from "@/ui/hooks";

type Props = {
	user: UserRank;
};

export function ListBorders({ user }: Props) {
	const { data } = useBordersByUser({ id: user.id });

	return (
		<ul className="flex flex-row flex-wrap gap-2 h-full w-full">
			{data.map((border) => (
				<li key={border.id} className="flex flex-col gap-2">
					{border.rank === Rank.Challenger && (
						<BorderChallenger
							name={border.title}
							username={user.username}
							avatar={user.avatar}
							rank={border.rank}
							img={border.img}
						/>
					)}
					{border.rank === Rank.Master && (
						<BorderMaster
							name={border.title}
							username={user.username}
							avatar={user.avatar}
							rank={border.rank}
							img={border.img}
						/>
					)}
					{border.rank === Rank.Diamond && (
						<BorderDiamond
							name={border.title}
							username={user.username}
							avatar={user.avatar}
							rank={border.rank}
							img={border.img}
						/>
					)}
					{border.rank === Rank.Platinum && (
						<BorderPlatinium
							name={border.title}
							username={user.username}
							avatar={user.avatar}
							rank={border.rank}
							img={border.img}
						/>
					)}
					{border.rank === Rank.Gold && (
						<BorderGold
							name={border.title}
							username={user.username}
							avatar={user.avatar}
							rank={border.rank}
							img={border.img}
						/>
					)}
					{border.rank === Rank.Silver && (
						<BorderSilver
							name={border.title}
							username={user.username}
							avatar={user.avatar}
							rank={border.rank}
							img={border.img}
						/>
					)}
					{border.rank === Rank.Bronze && (
						<BorderBronze
							name={border.title}
							username={user.username}
							avatar={user.avatar}
							rank={border.rank}
							img={border.img}
						/>
					)}
				</li>
			))}
		</ul>
	);
}

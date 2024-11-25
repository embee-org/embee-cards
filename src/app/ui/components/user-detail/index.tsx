import { UserRank } from "@/api/models/interfaces";
import { RankLogo } from "@/shared/components/rank-logo";
import { rankMapper } from "@/shared/mappers";
import { LinkBack } from "@/ui/components/link-back";

type Props = {
	user: UserRank;
};

export function UserDetail({ user }: Props) {
	return (
		<article className="flex flex-col items-center outline outline-4 outline-t1-secondary py-12 px-4 rounded-lg gap-4 h-fit w-[350px] relative">
			<LinkBack url="/ranking" className="absolute top-4 left-4" />
			<div className="flex flex-col gap-4 items-center w-fit h-full">
				<img
					className="rounded-full"
					src={user.avatar}
					alt={user.username}
					width={100}
					height={100}
				/>
				<h2 className="text-center font-serif font-extrabold text-2xl w-full uppercase">
					{user.username}
				</h2>
			</div>
			<div className="flex items-center justify-evenly font-sans font-semibold gap-4 h-full w-full">
				<RankLogo rank={rankMapper(user.rank)} />
			</div>
			<div className="flex items-center justify-evenly font-sans text-xl font-semibold gap-4 h-full w-full">
				<p>Bordes</p>
				<p className="font-serif font-normal">{user.borders.length} / 125</p>
			</div>
		</article>
	);
}

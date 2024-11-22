import { rankMapper } from "@/shared/mappers";
import { LinkBack } from "@/ui/components/link-back";
import { useUserRankHook } from "@/ui/hooks";

type Props = {
	id: string;
};

export function UserDetail({ id }: Props) {
	const { data } = useUserRankHook({ id });

	return (
		<article className="flex flex-col items-center outline outline-4 outline-t1-secondary py-12 px-4 rounded-lg gap-4 h-fit w-[350px] relative">
			<LinkBack url="/ranking" className="absolute top-4 left-4" />
			{data && (
				<div className="flex flex-col gap-4 items-center w-fit h-full">
					<img
						className="rounded-full"
						src={data.avatar}
						alt={data.username}
						width={100}
						height={100}
					/>
					<h2 className="text-center font-serif font-extrabold text-2xl w-full uppercase">
						{data.username}
					</h2>
				</div>
			)}
			{data && (
				<div className="flex items-center justify-evenly font-sans font-semibold gap-4 h-full w-full">
					<p className="text-xl">Rango</p>
					<img
						src={`/icons/rank/${rankMapper(data.rank)}.webp`}
						alt="Leaderboard"
						width={80}
						height={80}
					/>
				</div>
			)}

			{data && (
				<div className="flex items-center justify-evenly font-sans text-xl font-semibold gap-4 h-full w-full">
					<p>Cartas</p>
					<p className="font-serif font-normal">{data.cards.length} / 125</p>
				</div>
			)}
		</article>
	);
}

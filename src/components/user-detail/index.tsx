"use client";
import { BASE_HREF } from "@/consts/url";
import { useUserRankHook } from "@/hooks";
import { rankMapper } from "@/mappers";
import Image from "next/image";
import { LinkBack } from "../link-back";

type Props = {
	id: string;
};

export function UserDetail({ id }: Props) {
	const { data } = useUserRankHook({ id });

	return (
		<article className="flex flex-col items-center outline outline-4 outline-t1-secondary p-4 rounded-lg gap-4 h-fit w-[450px] max-w-1/4 relative">
			<LinkBack url="/ranking" className="absolute top-4 left-4" />
			{data && (
				<Image
					className="rounded-full"
					src={data.avatar}
					alt={data.username}
					width={100}
					height={100}
				/>
			)}
			{data && (
				<h2 className="text-center font-serif font-extrabold text-2xl w-full uppercase">
					{data.username}
				</h2>
			)}
			{data && (
				<div className="flex items-center justify-evenly font-sans font-semibold w-full">
					<p className="text-xl">Rank:</p>
					<Image
						src={`${BASE_HREF}/icons/rank/${rankMapper(data.rank)}.webp`}
						alt="Leaderboard"
						width={80}
						height={80}
					/>
				</div>
			)}

			{data && (
				<div className="flex items-center justify-evenly font-sans text-xl font-semibold w-full">
					<p>Cartas:</p>
					<p className="font-serif font-normal">{data.cards.length} / 125</p>
				</div>
			)}
		</article>
	);
}

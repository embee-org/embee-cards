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
		<article className="flex items-center outline outline-4 outline-t1-secondary py-12 px-4 rounded-lg gap-4 h-fit w-full relative">
			<LinkBack url="/ranking" className="absolute top-4 right-4" />
			{data && (
				<div className="flex flex-col gap-4 items-center w-fit h-full">
					<Image
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
				<div className="flex flex-col items-center justify-between font-sans font-semibold gap-4 h-full w-full">
					<Image
						src={`${BASE_HREF}/icons/rank/${rankMapper(data.rank)}.webp`}
						alt="Leaderboard"
						width={80}
						height={80}
					/>
					<p className="text-xl">Rango</p>
				</div>
			)}

			{data && (
				<div className="flex flex-col items-center justify-between font-sans text-xl font-semibold gap-4 h-full w-full">
					<p className="font-serif font-normal">{data.cards.length} / 125</p>
					<p>Cartas</p>
				</div>
			)}
		</article>
	);
}

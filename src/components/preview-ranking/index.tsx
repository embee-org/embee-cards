import { BASE_HREF } from "@/consts/url";
import { Rank } from "@/models/enums";
import Image from "next/image";
import Link from "next/link";

type Props = {
	id: string;
	username: string;
	rank: Rank;
	quantity?: number;
};

export function PreviewRanking({ rank, username, id, quantity }: Props) {
	const getBorderStyle = () => {
		if (rank === Rank.Challenger) return "bg-border-challenger";
		if (rank === Rank.Master) return "bg-border-master";
		if (rank === Rank.Diamond) return "bg-border-diamond";
		if (rank === Rank.Platinum) return "bg-border-platinum";
		if (rank === Rank.Gold) return "bg-border-gold";
		if (rank === Rank.Silver) return "bg-border-silver";
		return "bg-border-bronze";
	};

	const getTextStyle = () => {
		if (rank === Rank.Challenger) return "text-neutral-900";
		if (rank === Rank.Master) return "text-neutral-100";
		if (rank === Rank.Silver) return "text-gray-950";
		return "text-white";
	};

	return (
		<Link
			href={`/ranking/${id}`}
			className={`${getBorderStyle()} flex items-center justify-between rounded-lg p-4 mb-8 h-fit w-full`}
		>
			<div className="flex flex-col items-center h-fit w-fit">
				<Image
					src={`${BASE_HREF}/icons/rank/${rank.toLocaleUpperCase()}.webp`}
					width={60}
					height={60}
					alt="Challenger"
				/>
				<h3 className={`${getTextStyle()} text-sm font-semibold font-serif`}>
					Rango
				</h3>
			</div>
			<p className={`${getTextStyle()} text-2xl font-extrabold uppercase`}>
				{username}
			</p>
			<p
				className={`${getTextStyle()} flex flex-col items-center font-extrabold text-3xl`}
			>
				{quantity}
				<span className="text-sm font-semibold font-serif">Cartas</span>
			</p>
		</Link>
	);
}

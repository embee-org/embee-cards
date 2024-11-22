import { Rank } from "@/api/models/enums";

type Props = {
	username: string;
	avatar: string;
	rank: Rank;
	img: string;
};

const getSpellLeftClass = (rank: Rank): string => {
	let spellLeftClass = "absolute aspect-square";
	if (rank === Rank.Diamond || rank === Rank.Platinum) {
		spellLeftClass += " bottom-[26px] left-[75px] aspect-square";
		return spellLeftClass;
	}
	spellLeftClass += " bottom-[22px] left-[76px] aspect-square";
	return spellLeftClass;
};

const getSpellRightClass = (rank: Rank): string => {
	let spellRightClass = "absolute aspect-square";
	if (rank === Rank.Diamond || rank === Rank.Platinum) {
		spellRightClass += " bottom-[26px] left-[116px] aspect-square";
		return spellRightClass;
	}
	spellRightClass += " bottom-[22px] left-[118px] aspect-square";
	return spellRightClass;
};

export function BorderDetail({ rank, img, avatar, username }: Props) {
	const spellLeftClass = getSpellLeftClass(rank);
	const spellRightClass = getSpellRightClass(rank);

	return (
		<div
			className={`flex flex-col items-center w-[250px] aspect-[5/9] pt-4 relative`}
		>
			<div
				className={`bg-cover bg-center bg-no-repeat h-[345px] w-[calc(220px)]`}
				style={{
					backgroundImage: `url(${img})`,
				}}
			></div>
			<img
				className="absolute top-0 left-0 aspect-[5/9]"
				src={`/imgs/borders/${rank.toLowerCase()}.png`}
				alt={`Borde rango ${rank.toLowerCase()}`}
				width={250}
				height={450}
			/>
			<img
				className={spellLeftClass}
				src="/summoner-spell/flash.jpg"
				width={34.8}
				height={34.8}
				alt="Spell left"
			/>
			<img
				className={spellRightClass}
				src="/summoner-spell/ignite.jpg"
				width={34.8}
				height={34.8}
				alt="Spell right"
			/>
			<img
				className="absolute bottom-[13px] left-[17px]"
				src={avatar}
				alt={`Avatar usuario ${username}`}
				width={54}
				height={52}
			/>
		</div>
	);
}

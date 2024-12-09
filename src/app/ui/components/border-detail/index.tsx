import { Rank } from "@/api/models/enums";
import { AvatarUser } from "@/ui/components/avatar-user";
import { SummonerSpell } from "@/ui/store-components/summoner-spell";

type Props = {
	username: string;
	avatar: string;
	rank: Rank;
	img: string;
};

const getSpellLeftClass = (rank: Rank): string => {
	let spellLeftClass = "absolute aspect-square";
	if (rank === Rank.Challenger) {
		spellLeftClass += " bottom-[21px] left-[76px] aspect-square";
		return spellLeftClass;
	}
	spellLeftClass += " bottom-[15px] left-[76px] aspect-square";
	return spellLeftClass;
};

const getSpellRightClass = (rank: Rank): string => {
	let spellRightClass = "absolute aspect-square";
	if (rank === Rank.Challenger) {
		spellRightClass += " bottom-[21px] left-[117px] aspect-square";
		return spellRightClass;
	}
	spellRightClass += " bottom-[15px] left-[117px] aspect-square";
	return spellRightClass;
};

export function BorderDetail({ rank, img, avatar, username }: Props) {
	const spellLeftClass = getSpellLeftClass(rank);
	const spellRightClass = getSpellRightClass(rank);

	return (
		<div
			className={`flex flex-col items-center w-[250px] aspect-[5/9] pt-[12px] pl-2 relative`}
		>
			<div
				className={`bg-cover bg-center bg-no-repeat h-[352px] w-[225px]`}
				style={{
					backgroundImage: `url(${img})`,
				}}
			></div>
			<p
				className={`bg-[#00000099] backdrop-blur-sm absolute ${
					rank === Rank.Challenger ? "bottom-[90px]" : "bottom-[87px]"
				} left-4 p-2 text-center text-sky-200 font-bold font-serif w-[90%]`}
			>
				Faker 2023
			</p>
			<img
				className="absolute top-0 left-0 aspect-[5/9]"
				src={`https://embee-org.github.io/embee-statics/images/borders/${rank.toLowerCase()}.png`}
				alt={`Borde rango ${rank.toLowerCase()}`}
				width={250}
				height={450}
			/>
			<p
				className={`absolute left-4 ${
					rank === Rank.Challenger ? "bottom-[67px]" : "bottom-[63px]"
				} text-sm text-center text-white w-[90%]`}
			>
				eishacodelocho
			</p>
			<SummonerSpell position="leftIcon" classCustom={spellLeftClass} />
			<SummonerSpell position="rightIcon" classCustom={spellRightClass} />
			<AvatarUser rank={rank} avatar={avatar} username={username} />
		</div>
	);
}

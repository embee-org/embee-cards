import { useSpellStore } from "@/ui/store";

interface Props {
	position: "leftIcon" | "rightIcon";
	classCustom?: string;
}

export function SummonerSpell({ position, classCustom = "" }: Props) {
	const icon = useSpellStore((state) => state[position]);

	return (
		<img
			className={`absolute aspect-square ${classCustom}`}
			src={`/summoner-spell/${icon}`}
			width={37}
			height={37}
			alt={`Spell ${position.replace("Icon", "")}`}
		/>
	);
}

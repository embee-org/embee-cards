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
			width={34.8}
			height={34.8}
			alt={`Spell ${position.replace("Icon", "")}`}
		/>
	);
}

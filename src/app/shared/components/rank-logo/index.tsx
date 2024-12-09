import { Rank } from "@/api/models/enums";
import { Tooltip } from "@/shared/components/tooltip";
import { capitalizeFirstLetter } from "@/shared/utils";

interface Props {
	rank: Rank;
	width?: number;
	height?: number;
}

export function RankLogo({ rank, width = 80, height = 80 }: Props) {
	return (
		<Tooltip position="bottom" message={capitalizeFirstLetter(rank)}>
			<img
				src={`https://embee-org.github.io/embee-statics/icons/rank/${rank}.webp`}
				alt={`Logo rank ${rank.toString().toLowerCase()}`}
				width={width}
				height={height}
			/>
		</Tooltip>
	);
}

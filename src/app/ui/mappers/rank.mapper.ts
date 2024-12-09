import { Rank } from "@/api/models/enums";

export function rankMapper(rank: number) {
	if (rank === 1) return Rank.Challenger;
	if (rank === 2) return Rank.Master;
	if (rank === 3) return Rank.Diamond;
	if (rank === 4) return Rank.Platinum;
	if (rank === 5) return Rank.Gold;
	if (rank === 6) return Rank.Silver;
	return Rank.Bronze;
}

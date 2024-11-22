import { Rank } from "@/api/models/enums";

export interface Card {
	id: string;
	title: string;
	img: string;
	rank: Rank;
}

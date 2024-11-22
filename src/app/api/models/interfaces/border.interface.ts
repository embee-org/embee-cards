import { Rank } from "@/api/models/enums";

export interface Border {
	id: string;
	title: string;
	img: string;
	rank: Rank;
}

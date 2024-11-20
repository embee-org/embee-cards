import { Rank } from "../enums";

export interface Card {
	id: string;
	title: string;
	img: string;
	rank: Rank;
}

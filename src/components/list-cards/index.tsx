"use client";
import { useCardsByUser } from "@/hooks";
import { BorderCard } from "../border-card";

type Props = {
	id: string;
};

export function ListCards({ id }: Props) {
	const { data } = useCardsByUser({ id });

	return (
		<ul className="flex flex-row flex-wrap gap-2 h-full w-full">
			{data.map((card) => (
				<li
					key={card.id}
					className="flex flex-col gap-2 p-2 rounded-md shadow-md"
				>
					<BorderCard
						username={"eishacodelocho"}
						rank={card.rank}
						img={card.img}
						avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/de683159-76a8-42c2-82af-224aab79c0ad-profile_image-300x300.png"
					/>
				</li>
			))}
		</ul>
	);
}

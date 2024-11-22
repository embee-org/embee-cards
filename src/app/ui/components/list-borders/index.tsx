import { BorderDetail } from "@/shared/components/border-detail";
import { useBordersByUser } from "@/ui/hooks";

type Props = {
	id: string;
};

export function ListBorders({ id }: Props) {
	const { data } = useBordersByUser({ id });

	return (
		<ul className="flex flex-row flex-wrap gap-2 h-full w-full">
			{data.map((border) => (
				<li key={border.id} className="flex flex-col gap-2 p-2">
					<BorderDetail
						username={"eishacodelocho"}
						rank={border.rank}
						img={border.img}
						avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/de683159-76a8-42c2-82af-224aab79c0ad-profile_image-300x300.png"
					/>
				</li>
			))}
		</ul>
	);
}

import { Rank } from "@/api/models/enums";

type Props = {
	username: string;
	avatar: string;
	rank: Rank;
	img: string;
};

export function BorderDetail({ rank, img, avatar, username }: Props) {
	return (
		<div
			className={`flex flex-col items-center w-[250px] aspect-[5/9] pt-4 relative`}
		>
			<div
				className={`bg-cover bg-center bg-no-repeat h-[345px] w-[calc(220px)]`}
				style={{
					backgroundImage: `url(${img})`,
				}}
			></div>
			<img
				className="absolute top-0 left-0 aspect-[5/9]"
				src={`/imgs/borders/${rank.toLowerCase()}.png`}
				alt={`Borde rango ${rank.toLowerCase()}`}
				width={250}
				height={450}
			/>
			<img
				className="absolute bottom-[13px] left-[17px]"
				src={avatar}
				alt={`Avatar usuario ${username}`}
				width={54}
				height={52}
			/>
		</div>
	);
}
import { Rank } from "@/api/models/enums";
import { AvatarUser } from "@/shared/components/avatar-user";
import { SummonerSpell } from "@/ui/components/summoner-spell";

type Props = {
	name: string;
	username: string;
	avatar: string;
	rank: Rank;
	img: string;
};

export function BorderPlatinium({ name, rank, img, avatar, username }: Props) {
	return (
		<div
			className={`flex flex-col items-center w-[250px] aspect-[5/9] pt-[12px] pl-2 relative`}
		>
			<div
				className="bg-cover bg-center bg-no-repeat h-[352px] w-[228px]"
				style={{
					backgroundImage: `url(${img})`,
				}}
			></div>
			<p className="bg-[#00000099] backdrop-blur-sm absolute bottom-[86px] left-4 p-2 text-center text-sky-200 font-bold font-serif w-[91%]">
				{name}
			</p>
			<img
				className="absolute top-0 left-0 aspect-[5/9]"
				src="https://embee-org.github.io/embee-statics/images/borders/platinium.png"
				alt="Borde rango platinium"
				width={250}
				height={450}
			/>
			<p
				className={`absolute left-4 bottom-[62px] text-sm text-center text-white w-[90%]`}
			>
				{username}
			</p>
			<SummonerSpell
				position="leftIcon"
				classCustom="absolute aspect-square bottom-[14px] left-[76px] aspect-square"
			/>
			<SummonerSpell
				position="rightIcon"
				classCustom="absolute aspect-square  bottom-[15px] left-[119px] aspect-square"
			/>
			<AvatarUser rank={rank} avatar={avatar} username={username} />
		</div>
	);
}
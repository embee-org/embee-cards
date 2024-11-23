import { Rank } from "@/api/models/enums";

interface Props {
	rank: Rank;
	avatar: string;
	username: string;
}

const getAvatarClass = (rank: Rank) => {
	let avatarClass = "absolute aspect-square";
	if (rank === Rank.Challenger) {
		avatarClass += " bottom-[13px] left-[17px]";
		return avatarClass;
	}
	if (rank === Rank.Platinum) {
		avatarClass += " bottom-[5px] left-[15.1px]";
		return avatarClass;
	}
	avatarClass += " bottom-[6px] left-[15px]";
	return avatarClass;
};

export function AvatarUser({ rank, avatar, username }: Props) {
	return (
		<img
			className={getAvatarClass(rank)}
			src={avatar}
			alt={`Avatar usuario ${username}`}
			width={55}
			height={55}
		/>
	);
}

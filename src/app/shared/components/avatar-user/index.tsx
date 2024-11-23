import { Rank } from "@/api/models/enums";

interface Props {
	rank: Rank;
	avatar: string;
	username: string;
}

const getAvatarClass = (rank: Rank) => {
	let avatarClass = "absolute";
	if (rank === Rank.Diamond || rank === Rank.Platinum) {
		avatarClass += " bottom-[17px] left-[16px]";
		return avatarClass;
	}
	avatarClass += " bottom-[12px] left-[17px]";
	return avatarClass;
};

export function AvatarUser({ rank, avatar, username }: Props) {
	return (
		<img
			className={getAvatarClass(rank)}
			src={avatar}
			alt={`Avatar usuario ${username}`}
			width={54}
			height={52}
		/>
	);
}

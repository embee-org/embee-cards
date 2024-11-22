import { UserRank } from "@/api/models/interfaces";
import { getUsersRanking } from "@/api/services";
import { useEffect, useState } from "react";

export function useUsersRankHook() {
	const [data, setData] = useState<UserRank[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getRanking();
	}, []);

	const getRanking = async () => {
		setLoading(true);
		getUsersRanking()
			.then(({ users }) => setData(users))
			.finally(() => setLoading(false));
	};

	return { data, loading };
}

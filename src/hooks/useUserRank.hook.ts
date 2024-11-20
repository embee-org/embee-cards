import { UserRank } from "@/models/interfaces";
import { getUsersRanking } from "@/services";
import { useEffect, useState } from "react";

export function useUserRankHook() {
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

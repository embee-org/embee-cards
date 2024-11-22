import { UserRank } from "@/api/models/interfaces";
import { getUserById } from "@/api/services";
import { useEffect, useState } from "react";

export function useUserRankHook({ id }: { id: string }) {
	const [data, setData] = useState<UserRank>();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getUser = async () => {
		setLoading(true);
		getUserById({ id })
			.then(({ user }) => setData(user))
			.finally(() => setLoading(false));
	};

	return { data, loading };
}

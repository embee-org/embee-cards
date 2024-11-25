import { getUsersRanking } from "@/api/services";
import { useEffect } from "react";
import { useUsersStore } from "../store/user.store";

export function useUsersRankHook() {
	const setSuccess = useUsersStore((state) => state.setSuccess);
	const setLoading = useUsersStore((state) => state.setLoading);
	const setError = useUsersStore((state) => state.setError);

	useEffect(() => {
		const getRanking = () => {
			setLoading(true);
			getUsersRanking()
				.then((res) => setSuccess(res))
				.catch((error) => setError(error));
		};
		getRanking();
	}, []);
}

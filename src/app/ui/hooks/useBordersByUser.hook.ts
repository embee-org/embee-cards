import { Border } from "@/api/models/interfaces";
import { getBordersByUser } from "@/api/services";
import { useEffect, useState } from "react";

export function useBordersByUser({ id }: { id: string }) {
	const [data, setData] = useState<Border[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getBorders();
	}, []);

	const getBorders = () => {
		setLoading(true);
		getBordersByUser({ id })
			.then(({ borders }) => setData(borders))
			.finally(() => setLoading(false));
	};

	return { data, loading };
}

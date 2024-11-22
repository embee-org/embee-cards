import { Card } from "@/api/models/interfaces";
import { getCardsByUser } from "@/api/services";
import { useEffect, useState } from "react";

export function useCardsByUser({ id }: { id: string }) {
	const [data, setData] = useState<Card[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getCards();
	}, []);

	const getCards = () => {
		setLoading(true);
		getCardsByUser({ id })
			.then(({ cards }) => setData(cards))
			.finally(() => setLoading(false));
	};

	return { data, loading };
}

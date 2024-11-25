import { UserRank } from "@/api/models/interfaces";
import { create } from "zustand";

type Store = {
	res: { users: UserRank[] } | null;
	error: JSON | null;
	loading: boolean;
	setSuccess: (res: { users: UserRank[] }) => void;
	setError: (error: JSON) => void;
	setLoading: (loading: boolean) => void;
};

export const useUsersStore = create<Store>()((set) => ({
	res: null,
	error: null,
	loading: false,
	setLoading: (loading) => set((state) => ({ ...state, loading })),
	setSuccess: (res) => set(() => ({ res, error: null, loading: false })),
	setError: (error) => set(() => ({ res: null, error, loading: false })),
}));

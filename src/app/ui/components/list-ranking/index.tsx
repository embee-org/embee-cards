import { PreviewRanking } from "@/shared/components/preview-ranking";
import { rankMapper } from "@/shared/mappers";
import { useUsersStore } from "@/ui/store/user.store";

export function ListRanking() {
	const res = useUsersStore((state) => state.res);

	return (
		<ul className="w-[600px] max-w-[80vw]">
			{res?.users.map((user) => (
				<li key={user.id}>
					<PreviewRanking
						username={user.username}
						id={user.id}
						rank={rankMapper(user.rank)}
						quantity={user.borders.length}
					/>
				</li>
			))}
		</ul>
	);
}

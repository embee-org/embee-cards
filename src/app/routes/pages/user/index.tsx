import { BasePage } from "@/shared/components/base-page";
import { ListCards } from "@/ui/components/list-cards";
import { UserDetail } from "@/ui/components/user-detail";
import { useParams } from "react-router-dom";

export default function UserPage() {
	const { id } = useParams<{ id: string }>();

	return (
		<BasePage>
			{id && <UserDetail id={id} />}
			<section className="flex px-4 w-full">
				{id && <ListCards id={id} />}
			</section>
		</BasePage>
	);
}

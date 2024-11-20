import { BasePage } from "@/components/base-page";
import { UserDetail } from "@/components/user-detail";

type Props = {
	params: Promise<{ id: string }>;
};

export default async function UserIdPage({ params }: Props) {
	const { id } = await params;

	return (
		<BasePage className="flex flex-wrap">
			{id && <UserDetail id={id} />}
			<section className="flex gap-4 w-3/4"></section>
		</BasePage>
	);
}

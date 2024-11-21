import { BasePage } from "@/components/base-page";
import { ListCards } from "@/components/list-cards";
import { UserDetail } from "@/components/user-detail";
import { User } from "@/models/interfaces";
import { readFile } from "node:fs/promises";
import path from "node:path";

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
	const filePath = path.join(process.cwd(), "public", "data", "users.json");
	const fileContents = await readFile(filePath, "utf-8");
	const { users } = JSON.parse(fileContents);

	return users.map((user: User) => ({
		id: user.id,
	}));
}

export default async function UserIdPage({ params }: Props) {
	const { id } = await params;

	return (
		<BasePage className="flex flex-wrap">
			{id && <UserDetail id={id} />}
			<section className="flex px-4 w-full">
				{id && <ListCards id={id} />}
			</section>
		</BasePage>
	);
}

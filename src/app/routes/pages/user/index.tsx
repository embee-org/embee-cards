import { BasePage } from "@/shared/components/base-page";
import { TabItem, TabsBox } from "@/shared/components/tabs";
import { ListCards } from "@/ui/components/list-cards";
import { UserDetail } from "@/ui/components/user-detail";
import { useState } from "react";
import { useParams } from "react-router-dom";

enum TabItems {
	Borders = "borders",
	Cards = "cards",
}

export default function UserPage() {
	const { id } = useParams<{ id: string }>();
	const [selected, setSelected] = useState(TabItems.Borders);

	return (
		<BasePage className="grid grid-flow-col grid-cols-[auto_1fr]">
			{id && <UserDetail id={id} />}
			<article className="flex flex-col gap-4 h-full w-full">
				<TabsBox className="justify-center w-full">
					<TabItem
						selected={selected === TabItems.Borders}
						onClick={() => setSelected(TabItems.Borders)}
					>
						Bordes
					</TabItem>
					<TabItem
						disabled
						selected={selected === TabItems.Cards}
						onClick={() => setSelected(TabItems.Cards)}
					>
						Cartas
					</TabItem>
				</TabsBox>
				<section className="flex px-4 w-full">
					{id && <ListCards id={id} />}
				</section>
			</article>
		</BasePage>
	);
}

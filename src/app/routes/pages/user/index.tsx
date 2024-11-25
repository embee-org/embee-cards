import { BasePage } from "@/shared/components/base-page";
import { TabItem, TabsBox } from "@/shared/components/tabs";
import { FormSummonerSpell } from "@/ui/components/form-summoner-spell";
import { ListBorders } from "@/ui/components/list-borders";
import { UserDetail } from "@/ui/components/user-detail";
import { useUserRankHook } from "@/ui/hooks";
import { useState } from "react";
import { useParams } from "react-router-dom";

enum TabItems {
	Borders = "borders",
	Cards = "cards",
}

export default function UserPage() {
	const { id } = useParams<{ id: string }>();
	const { data } = useUserRankHook({ id: id ?? "" });
	const [selected, setSelected] = useState(TabItems.Borders);

	return (
		<BasePage className="grid grid-flow-col grid-cols-[auto_1fr]">
			{data && <UserDetail user={data} />}
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
				<FormSummonerSpell />
				<section className="flex px-4 w-full">
					{data && <ListBorders user={data} />}
				</section>
			</article>
		</BasePage>
	);
}

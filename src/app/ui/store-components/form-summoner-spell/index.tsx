/* eslint-disable @typescript-eslint/no-unused-expressions */
import { SimpleSelect } from "@/ui/components/simple-select";
import { useSpellStore } from "@/ui/store";
import { useState } from "react";

interface Form {
	left: string;
	right: string;
}

enum Spell {
	BARRIER = "barrier.jpg",
	CLEANSE = "cleanse.jpg",
	EXHAUST = "exhaust.jpg",
	FLASH = "flash.jpg",
	GHOST = "ghost.jpg",
	HEAL = "heal.jpg",
	IGNITE = "ignite.jpg",
	SMITE = "smite.jpg",
	TELEPORT = "teleport.jpg",
}

export function FormSummonerSpell() {
	const leftIcon = useSpellStore((state) => state.leftIcon);
	const rightIcon = useSpellStore((state) => state.rightIcon);
	const changeLeftIcon = useSpellStore((state) => state.changeLeftIcon);
	const changeRightIcon = useSpellStore((state) => state.changeRightIcon);
	const [form, setForm] = useState<Form>({
		left: leftIcon,
		right: rightIcon,
	});

	const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
		name === "left" ? changeLeftIcon(value) : changeRightIcon(value);
	};

	return (
		<form className="flex flex-wrap items-center gap-4 p-6">
			<p className="font-bold text-xl">Hechizos de invocador:</p>
			<SimpleSelect
				className="max-w-[150px] w-full"
				name="left"
				defaultValue={leftIcon}
				onChange={handleOnChange}
			>
				<option disabled={form.right === Spell.FLASH} value={Spell.FLASH}>
					Flash
				</option>
				<option disabled={form.right === Spell.IGNITE} value={Spell.IGNITE}>
					Ignite
				</option>
				<option disabled={form.right === Spell.BARRIER} value={Spell.BARRIER}>
					Barrier
				</option>
				<option disabled={form.right === Spell.CLEANSE} value={Spell.CLEANSE}>
					Cleanse
				</option>
				<option disabled={form.right === Spell.EXHAUST} value={Spell.EXHAUST}>
					Exhaust
				</option>
				<option disabled={form.right === Spell.GHOST} value={Spell.GHOST}>
					Ghost
				</option>
				<option disabled={form.right === Spell.HEAL} value={Spell.HEAL}>
					Heal
				</option>
				<option disabled={form.right === Spell.SMITE} value={Spell.SMITE}>
					Smite
				</option>
				<option disabled={form.right === Spell.TELEPORT} value={Spell.TELEPORT}>
					Teleport
				</option>
			</SimpleSelect>

			<SimpleSelect
				className="max-w-[150px] w-full"
				name="right"
				defaultValue={rightIcon}
				onChange={handleOnChange}
			>
				<option disabled={form.left === Spell.FLASH} value={Spell.FLASH}>
					Flash
				</option>
				<option disabled={form.left === Spell.IGNITE} value={Spell.IGNITE}>
					Ignite
				</option>
				<option disabled={form.left === Spell.BARRIER} value={Spell.BARRIER}>
					Barrier
				</option>
				<option disabled={form.left === Spell.CLEANSE} value={Spell.CLEANSE}>
					Cleanse
				</option>
				<option disabled={form.left === Spell.EXHAUST} value={Spell.EXHAUST}>
					Exhaust
				</option>
				<option disabled={form.left === Spell.GHOST} value={Spell.GHOST}>
					Ghost
				</option>
				<option disabled={form.left === Spell.HEAL} value={Spell.HEAL}>
					Heal
				</option>
				<option disabled={form.left === Spell.SMITE} value={Spell.SMITE}>
					Smite
				</option>
				<option disabled={form.left === Spell.TELEPORT} value={Spell.TELEPORT}>
					Teleport
				</option>
			</SimpleSelect>
		</form>
	);
}

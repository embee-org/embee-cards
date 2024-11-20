import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-neutral-300 dark:bg-black text-gray-950 dark:text-neutral-50 flex flex-col items-center justify-center p-4 gap-2 font-semibold h-fit w-full">
			<p className="w-fit">
				Inspirado en:{" "}
				<Link
					href="https://manz.dev/manzcards/"
					target="_black"
					className="text-t1-secondary dark:text-t1-secondary"
				>
					MANZDEV
				</Link>{" "}
				y{" "}
				<Link
					href="https://cards.uxanarangel.com"
					target="_black"
					className="text-t1-secondary dark:text-t1-secondary"
				>
					ANARANGEL
				</Link>
				.
			</p>
			<p>Siguelos en sus streams y redes</p>
		</footer>
	);
}

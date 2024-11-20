import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-gray-200 dark:bg-gray-900 text-red-600 flex flex-col items-center justify-center p-4 gap-2 font-semibold h-fit w-full">
			<p className="w-fit">
				Inspirado en:{" "}
				<Link
					href="https://manz.dev/manzcards/"
					target="_black"
					className="text-yellow-500"
				>
					MANZDEV
				</Link>{" "}
				y{" "}
				<Link
					href="https://cards.uxanarangel.com"
					target="_black"
					className="text-yellow-500"
				>
					ANARANGEL
				</Link>
				.
			</p>
			<p>Siguelos en sus streams y redes</p>
		</footer>
	);
}

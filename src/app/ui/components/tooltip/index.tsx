interface Props
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	children: React.ReactNode;
	position?: "top" | "bottom" | "left" | "right";
	textSize?:
		| "xs"
		| "sm"
		| "base"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl"
		| "8xl"
		| "9xl";
	message: string;
}

export function Tooltip({
	children,
	message,
	textSize = "base",
	position = "bottom",
	...props
}: Props) {
	const containerTooltip = `relative group flex items-center justify-center`;
	let arrowTooltip = `absolute bg-black text-white text-${textSize} px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`;

	if (position === "bottom")
		arrowTooltip += " top-full left-1/2 transform -translate-x-1/2";

	if (position === "top")
		arrowTooltip += " bottom-full left-1/2 transform -translate-x-1/2";

	if (position === "left")
		arrowTooltip += " right-full top-1/2 transform -translate-y-1/2";

	if (position === "right")
		arrowTooltip += " left-full top-1/2 transform -translate-y-1/2";

	return (
		<div {...props} className={`${containerTooltip}  h-fit w-fit`}>
			{children}
			<p className={`${arrowTooltip}`}>{message}</p>
		</div>
	);
}

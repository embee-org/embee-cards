type Props = {
	color: string;
	height: number;
	width: number;
};

export const ChevronIcon = ({ color, height, width }: Props) => (
	<svg width={width} height={height} fill="none" viewBox="0 0 24 24">
		<path
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m15 6-5.787 5.787v0a.3.3 0 0 0 0 .426v0L15 18"
		/>
	</svg>
);

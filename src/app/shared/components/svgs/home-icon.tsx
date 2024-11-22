type Props = {
	colors: {
		primary: string;
		secondary: string;
	};
	height: number;
	width: number;
};

export const HomeIcon = ({
	height,
	width,
	colors: { primary, secondary },
}: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill="none"
		viewBox="0 0 24 24"
	>
		<g clipPath="url(#a)">
			<path fill={secondary} d="M0 0h24v24H0z" />
			<path
				stroke={primary}
				strokeLinejoin="round"
				d="M9 21H4a1 1 0 0 1-1-1v-7.586a1 1 0 0 1 .293-.707l8-8a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1h-5m-6 0h6m-6 0v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill={secondary} d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);

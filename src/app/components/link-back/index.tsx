"use client";
import { useThemeHook } from "@/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronIcon } from "../svgs";

type Props = { url: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkBack({ url, ...props }: Props) {
	const { dark } = useThemeHook();
	const [isHovered, setIsHovered] = useState(false);

	const showHovered = () => setIsHovered(true);

	const hideHovered = () => setIsHovered(false);

	return (
		<Link
			{...props}
			to={url}
			className={`bg-t1-secondary hover:bg-t1-primary  hover:dark:bg-t1-primary-dark rounded-full text-t1-primary dark:text-t1-primary-dark hover:text-t1-secondary p-1 font-sans font-semibold outline outline-4 outline-t1-primary hover:outline-t1-secondary duration-500 ${
				props?.className ?? ""
			}`}
			onMouseEnter={showHovered}
			onMouseLeave={hideHovered}
		>
			<ChevronIcon
				color={isHovered ? "#af9660" : dark ? "#DB1A23ff" : "#831415ff"}
				width={25}
				height={25}
			/>
		</Link>
	);
}

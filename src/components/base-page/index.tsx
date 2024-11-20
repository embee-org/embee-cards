import React from "react";

type Props = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function BasePage({ children, ...props }: Props) {
	return (
		<main {...props} className={`p-4 h-full w-full ${props?.className ?? ""}`}>
			{children}
		</main>
	);
}

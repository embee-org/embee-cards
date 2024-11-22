import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export function BasePage({ children, ...props }: Props) {
	return (
		<main {...props} className={`p-4 h-auto w-full ${props?.className ?? ""}`}>
			{children}
		</main>
	);
}

interface TabsBoxProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export function TabsBox({ children, ...props }: TabsBoxProps) {
	return (
		<div
			{...props}
			className={`flex gap-4 items-end ${props?.className ?? ""}`}
		>
			{children}
		</div>
	);
}

interface TabItemProps extends React.HTMLAttributes<HTMLButtonElement> {
	selected?: boolean;
	disabled?: boolean;
	children: React.ReactNode;
}

export function TabItem({ children, selected, ...props }: TabItemProps) {
	return (
		<button
			type="button"
			{...props}
			className={`
        text-t1-primary dark:text-t1-primary-dark decoration-2 underline-offset-4 font-semibold text-xl disabled:opacity-60
        ${
					selected
						? "text-t1-secondary dark:text-t1-secondary underline decoration-t1-secondary"
						: ""
				} ${props?.className ?? ""}}
			`}
		>
			{children}
		</button>
	);
}

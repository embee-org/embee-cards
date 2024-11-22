import { Suspense } from "react";

interface Props {
	children: React.ReactNode;
}

export function LoaderPage({ children }: Props) {
	return <Suspense fallback={<p>...Loading</p>}>{children}</Suspense>;
}

import BaseLayout from "@/routes/layouts/base-layout";
import { HomePage, RankingPage, UserPage } from "@/routes/pages/routes";
import { LoaderPage } from "@/shared/components/loader-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <BaseLayout />,
			children: [
				{
					path: "",
					element: <LoaderPage children={<HomePage />} />,
				},
				{
					path: "ranking",
					element: <LoaderPage children={<RankingPage />} />,
				},
				{
					path: "ranking/:id",
					element: <LoaderPage children={<UserPage />} />,
				},
			],
		},
	],
	{
		basename: "/",
		future: {
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_relativeSplatPath: true,
			v7_skipActionErrorRevalidation: true,
		},
	}
);

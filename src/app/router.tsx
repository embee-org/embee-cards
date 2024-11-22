import { LoaderPage } from "@/components/loader-page";
import BaseLayout from "@/layouts/base-layout";
import { HomePage, RankingPage, UserPage } from "@/pages/routes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
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
]);

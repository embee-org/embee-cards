import { lazy } from "react";

export const HomePage = lazy(() => import("./home"));

export const RankingPage = lazy(() => import("./ranking"));

export const UserPage = lazy(() => import("./user"));

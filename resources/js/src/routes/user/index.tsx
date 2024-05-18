import { rootRoute } from "..";
import { createRoute } from "@tanstack/react-router";
import LandingPage from "../../pages/user";

export const LandingPageRoute = createRoute({
    path: "/",
    component: LandingPage,
    getParentRoute: () => rootRoute,
});

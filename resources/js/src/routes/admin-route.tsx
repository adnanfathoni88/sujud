import { rootRoute } from ".";
import { createRoute } from "@tanstack/react-router";
import AdminPage from "../pages/admin";

export const adminRoute = createRoute({
    path: "/admin/admin",
    component: AdminPage,
    getParentRoute: () => rootRoute,
});

import { rootRoute } from "../";
import { createRoute } from "@tanstack/react-router";
import AdminAddPage from "../../pages/admin/admin-add";

export const adminAddRoute = createRoute({
    path: "/admin/add",
    component: AdminAddPage,
    getParentRoute: () => rootRoute,
});

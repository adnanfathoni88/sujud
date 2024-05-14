import { rootRoute } from "../";
import { createRoute } from "@tanstack/react-router";
import CategoryAddPage from "../../pages/category/categoy-add";

export const categoryAddRoute = createRoute({
    path: "/category/add",
    component: CategoryAddPage,
    getParentRoute: () => rootRoute,
});

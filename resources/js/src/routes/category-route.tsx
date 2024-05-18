import { rootRoute } from ".";
import { createRoute } from "@tanstack/react-router";
import CategoryListPage from "../pages/category-list";

export const categoryListRoute = createRoute({
    path: "/category",
    component: CategoryListPage,
    getParentRoute: () => rootRoute,
});

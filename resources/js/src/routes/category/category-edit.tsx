import { rootRoute } from "../";
import { createRoute } from "@tanstack/react-router";
import CategoryEditPage from "../../pages/category/category-edit";

export const categoryEditRoute = createRoute({
    path: "/category/edit/$categoryId",
    component: CategoryEditPage,
    getParentRoute: () => rootRoute,
});

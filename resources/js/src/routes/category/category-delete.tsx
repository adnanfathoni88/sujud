import { rootRoute } from "../";
import { createRoute } from "@tanstack/react-router";
import CategoryDeletePage from "../../pages/category/category-delete";

export const categoryDeleteRoute = createRoute({
    path: "/category/delete/$categoryId",
    component: CategoryDeletePage,
    getParentRoute: () => rootRoute,
});

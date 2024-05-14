import { rootRoute } from "../";
import { createRoute } from "@tanstack/react-router";
import CategoryPage from "../../pages/category";

export const categoryRoute = createRoute({
    path: "/category",
    component: CategoryPage,
    getParentRoute: () => rootRoute,
});

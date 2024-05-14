import { rootRoute } from "../";
import { createRoute } from "@tanstack/react-router";
import CategoryDetailPage from "../../pages/category/category-detail";

export const categoryDetailRoute = createRoute({
    path: "/category/$categoryId",
    component: CategoryDetailPage,
    getParentRoute: () => rootRoute,
});

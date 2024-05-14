import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { productRoute } from "./product";
import { productDetailRoute } from "./product-detail";
import { categoryRoute } from "./category";
import { categoryDetailRoute } from "./category/category-detail";
import { categoryAddRoute } from "./category/category-add";
import { categoryEditRoute } from "./category/category-edit";
import { categoryDeleteRoute } from "./category/category-delete";

export const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

export const routeTree = rootRoute.addChildren([
    productRoute,
    productDetailRoute,
    categoryRoute,
    categoryDetailRoute,
    categoryAddRoute,
    categoryEditRoute,
    categoryDeleteRoute,
]);
export const router = createRouter({ routeTree });

import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { productRoute } from "./product/product";
import { productAddRoute } from "./product/product-add";
import { productDetailRoute } from "./product/product-detail";
import { categoryRoute } from "./category";
import { categoryDetailRoute } from "./category/category-detail";
import { categoryAddRoute } from "./category/category-add";
import { categoryEditRoute } from "./category/category-edit";
import { categoryDeleteRoute } from "./category/category-delete";
import { loginRoute } from "./login";
import { registerRoute } from "./register";
import { productUpdateRoute } from "./product/product-update";
import { adminRoute } from "./admin/index";
import { adminAddRoute } from "./admin/admin-add";
import { LandingPageRoute } from "./user";

export const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

export const routeTree = rootRoute.addChildren([
    LandingPageRoute,
    adminRoute,
    adminAddRoute,
    productRoute,
    productAddRoute,
    productUpdateRoute,
    productDetailRoute,
    categoryRoute,
    categoryDetailRoute,
    categoryAddRoute,
    categoryEditRoute,
    categoryDeleteRoute,
    loginRoute,
    registerRoute,
]);
export const router = createRouter({ routeTree });

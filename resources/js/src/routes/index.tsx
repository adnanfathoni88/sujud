import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { productRoute } from "./product/product";
import { productAddRoute } from "./product/product-add";
import { productDetailRoute } from "./product/product-detail";
import { loginRoute } from "./login";
import { registerRoute } from "./register";
import { productUpdateRoute } from "./product/product-update";
import { categoryListRoute } from "./category-route";

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
    productAddRoute,
	productUpdateRoute,
    productDetailRoute,
    
    categoryListRoute,

    loginRoute,
    registerRoute,
]);
export const router = createRouter({ routeTree });

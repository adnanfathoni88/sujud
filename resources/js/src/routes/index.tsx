import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { loginRoute } from "./login";
import { registerRoute } from "./register";
import { categoryListRoute } from "./category-route";
import {
    productAddRoute,
    productDetailRoute,
    productRoute,
    productUpdateRoute,
} from "./product-route";
import {
    LandingPageRoute,
    cartRoute,
    detailShopRoute,
    shopRoute,
} from "./user";

export const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

export const routeTree = rootRoute.addChildren([
    cartRoute,
    detailShopRoute,
    LandingPageRoute,
    shopRoute,
    productRoute,
    productAddRoute,
    productUpdateRoute,
    productDetailRoute,
    categoryListRoute,
    loginRoute,
    registerRoute,
]);
export const router = createRouter({ routeTree });

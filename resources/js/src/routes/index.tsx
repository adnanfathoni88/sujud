import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { loginRoute } from "./login";
import { registerRoute } from "./register";
import { categoryListRoute } from "./category-route";
import {
    productAddRoute,
    productDetailRoute,
    productRoute,
} from "./product-route";
import {
    LandingPageRoute,
    cartRoute,
    detailShopRoute,
    paymentRoute,
    shopRoute,
} from "./user";
import { adminRoute } from "./admin";
import { ulasanRoute } from "./ulasan-route";
import { profileRoute } from "./profile";

export const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

export const routeTree = rootRoute.addChildren([
    ulasanRoute,
    adminRoute,
    paymentRoute,
    cartRoute,
    detailShopRoute,
    LandingPageRoute,
    shopRoute,
    productRoute,
    productAddRoute,
    productDetailRoute,
    categoryListRoute,
    loginRoute,
    registerRoute,
	profileRoute,
]);
export const router = createRouter({ routeTree });

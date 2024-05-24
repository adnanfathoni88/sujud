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
    aboutUsRoute,
} from "./user";
import { adminRoute } from "./admin-route";
import { ulasanRoute } from "./ulasan-route";
import { profileRoute } from "./profile";
import { replyUlasanRoute } from "./reply-ulasan-route";
import { ongkirDetailRoute, ongkirRoute } from "./ongkir-route";
import { AuthWrapper } from "../services/auth";

export const rootRoute = createRootRoute({
    component: () => (
        <AuthWrapper>
            <Outlet />
            <TanStackRouterDevtools />
        </AuthWrapper>
    ),
});

export const routeTree = rootRoute.addChildren([
    adminRoute,
    ulasanRoute,
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
    replyUlasanRoute,
    ongkirRoute,
    ongkirDetailRoute,
    aboutUsRoute,
]);
export const router = createRouter({ routeTree });

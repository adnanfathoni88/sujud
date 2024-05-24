import { rootRoute } from "..";
import { createRoute } from "@tanstack/react-router";
import LandingPage from "../../pages/user";
import shopPage from "../../pages/user/shop";
import cartPage from "../../pages/user/cart";
import detailShopPage from "../../pages/user/detail-shop";
import paymentPage from "../../pages/user/payment";
import aboutUsPage from "../../pages/user/about-us";

export const LandingPageRoute = createRoute({
    path: "/",
    component: LandingPage,
    getParentRoute: () => rootRoute,
});

export const shopRoute = createRoute({
    path: "/shop",
    component: shopPage,
    getParentRoute: () => rootRoute,
});

export const detailShopRoute = createRoute({
    path: "/detail/$id/shop",
    component: detailShopPage,
    getParentRoute: () => rootRoute,
});

export const cartRoute = createRoute({
    path: "/cart",
    component: cartPage,
    getParentRoute: () => rootRoute,
});
export const paymentRoute = createRoute({
    path: "/payment",
    component: paymentPage,
    getParentRoute: () => rootRoute,
});
export const aboutUsRoute = createRoute({
    path: "/about-us",
    component: aboutUsPage,
    getParentRoute: () => rootRoute,
});

import { createRoute } from "@tanstack/react-router";
import { rootRoute } from ".";
import ProductPage from "../pages/product-list";
import ProductAddPage from "../pages/product-add";
import ProductDetailPage from "../pages/product-detail";

export const productAddRoute = createRoute({
    path: "/admin/produk/add",
    component: ProductAddPage,
    getParentRoute: () => rootRoute,
});

export const productDetailRoute = createRoute({
    path: "/admin/produk/$productId",
    component: ProductDetailPage,
    getParentRoute: () => rootRoute,
});

export const productRoute = createRoute({
    path: "/admin/produk",
    component: ProductPage,
    getParentRoute: () => rootRoute,
});

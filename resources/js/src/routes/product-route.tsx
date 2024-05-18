import { createRoute } from "@tanstack/react-router";
import { rootRoute } from ".";
import ProductPage from "../pages/product-list";
import ProductAddPage from "../pages/product-add";
import ProductDetailPage from "../pages/product-detail";
import ProductUpdatePage from "../pages/product-update";

export const productAddRoute = createRoute({
    path: "/produk/add",
    component: ProductAddPage,
    getParentRoute: () => rootRoute,
});

export const productDetailRoute = createRoute({
    path: "/produk/$productId",
    component: ProductDetailPage,
    getParentRoute: () => rootRoute,
});

export const productUpdateRoute = createRoute({
    path: "/produk/update/$id",
    component: ProductUpdatePage,
    getParentRoute: () => rootRoute,
});

export const productRoute = createRoute({
    path: "/produk",
    component: ProductPage,
    getParentRoute: () => rootRoute,
});

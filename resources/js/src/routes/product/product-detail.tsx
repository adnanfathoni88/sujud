import { rootRoute } from "..";
import { createRoute } from "@tanstack/react-router";
import ProductDetailPage from "../../pages/product/product-detail";

export const productDetailRoute = createRoute({
    path: "/product/$productId",
    component: ProductDetailPage,
    getParentRoute: () => rootRoute,
});

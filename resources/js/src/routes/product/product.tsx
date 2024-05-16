import { rootRoute } from "..";
import { createRoute } from "@tanstack/react-router";
import ProductPage from "../../pages/product/product";
import ProductAddPage from "../../pages/product/product";

export const productRoute = createRoute({
    path: "/product",
    component: ProductPage,
    getParentRoute: () => rootRoute,
});

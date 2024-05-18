import { rootRoute } from "..";
import { createRoute } from "@tanstack/react-router";
import ProductPage from "../../pages/product";
import ProductAddPage from "../../pages/product";

export const productRoute = createRoute({
    path: "/product",
    component: ProductPage,
    getParentRoute: () => rootRoute,
});

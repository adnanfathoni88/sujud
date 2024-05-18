import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "..";
import ProductUpdatePage from "../../pages/product-update";

export const productUpdateRoute = createRoute({
    path: "/product/update/$id",
    component: ProductUpdatePage,
    getParentRoute: () => rootRoute,
});

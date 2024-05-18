import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "..";
import ProductAddPage from "../../pages/product-add";

export const productAddRoute = createRoute({
    path: "/product/add",
    component: ProductAddPage,
    getParentRoute: () => rootRoute,
});

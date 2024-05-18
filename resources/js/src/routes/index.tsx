import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { loginRoute } from "./login";
import { registerRoute } from "./register";
import { productUpdateRoute } from "./product/product-update";

export const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

export const routeTree = rootRoute.addChildren([
    LandingPageRoute,
    adminRoute,
    adminAddRoute,
    productRoute,
    productAddRoute,
    productUpdateRoute,
    productDetailRoute,
    
    categoryListRoute,

    loginRoute,
    registerRoute,
]);
export const router = createRouter({ routeTree });

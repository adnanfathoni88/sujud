import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { productRoute } from "./product";
import { productDetailRoute } from "./product-detail";
import { loginRoute } from "./login";
import { registerRoute } from "./register";

export const rootRoute = createRootRoute({
	component: () => (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
})
export const routeTree = rootRoute.addChildren([productRoute, productDetailRoute, loginRoute, registerRoute])
export const router = createRouter({ routeTree })
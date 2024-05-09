import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { productRoute } from "./product";
import { productDetailRoute } from "./product-detail";

export const rootRoute = createRootRoute({
	component: () => (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
})
export const routeTree = rootRoute.addChildren([productRoute, productDetailRoute])
export const router = createRouter({ routeTree })
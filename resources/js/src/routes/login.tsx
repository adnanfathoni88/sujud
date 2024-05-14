import { rootRoute } from "."
import { createRoute } from "@tanstack/react-router"
import LoginPage from "../pages/login"

export const loginRoute = createRoute({
	path: '/login',
	component: LoginPage,
	getParentRoute: () => rootRoute,
})
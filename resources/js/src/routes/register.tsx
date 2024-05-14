import { rootRoute } from "."
import { createRoute } from "@tanstack/react-router"
import RegisterPage from "../pages/register"

export const registerRoute = createRoute({
	path: '/register',
	component: RegisterPage,
	getParentRoute: () => rootRoute,
})
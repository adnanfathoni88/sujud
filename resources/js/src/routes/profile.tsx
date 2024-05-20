import { rootRoute } from "."
import { createRoute } from "@tanstack/react-router"
import ProfilePage from "../pages/profile"

export const profileRoute = createRoute({
	path: '/profile',
	component: ProfilePage,
	getParentRoute: () => rootRoute,
})
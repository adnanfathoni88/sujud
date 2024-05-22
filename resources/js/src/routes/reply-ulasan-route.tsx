import { createRoute } from "@tanstack/react-router";
import { rootRoute } from ".";
import ReplyUlasanPage from "../pages/reply-ulasan";

export const replyUlasanRoute = createRoute({
    path: "/admin/ulasan",
    component: ReplyUlasanPage,
    getParentRoute: () => rootRoute,
});
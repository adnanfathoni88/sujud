import { createRoute } from "@tanstack/react-router";
import { rootRoute } from ".";
import OngkirPage from "../pages/ongkir";
import OngkirDetailPage from "../pages/ongkir-detail";

export const ongkirRoute = createRoute({
    path: "/admin/ongkir",
    component: OngkirPage,
    getParentRoute: () => rootRoute,
});

export const ongkirDetailRoute = createRoute({
    path: "/admin/ongkir/$ongkirId",
    component: OngkirDetailPage,
    getParentRoute: () => rootRoute,
});

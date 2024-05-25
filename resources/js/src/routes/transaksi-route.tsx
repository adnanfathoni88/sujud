import { rootRoute } from ".";
import { createRoute } from "@tanstack/react-router";
import TransaksiListPage from "../pages/transaksi-list";

export const transaksiRoute = createRoute({
    path: "/admin/transaksi",
    component: TransaksiListPage,
    getParentRoute: () => rootRoute,
});

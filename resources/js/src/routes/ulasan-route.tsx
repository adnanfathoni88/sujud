import { createRoute } from "@tanstack/react-router";
import { rootRoute } from ".";
import ulasanPage from "../pages/ulasan/index";

export const ulasanRoute = createRoute({
    path: "/admin/produk/$produkId/varian/$varianId/ulasan",
    component: ulasanPage,
    getParentRoute: () => rootRoute,
});

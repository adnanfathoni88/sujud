import { queryClient } from "../../main";
import { deleteUlasanById, getUlasanList } from "../api/ulasan";
import { useQuery, useMutation } from "@tanstack/react-query";

// show all
export function UseGetUlasanList(produkId: number, varianId: number) {
    return useQuery({
        queryKey: ["UseGetUlasanList", produkId, varianId],
        queryFn: () => getUlasanList(produkId, varianId),
    });
}

// delete by id
export function useDeleteUlasanById() {
    return useMutation({
        mutationKey: ["useDeleteUlasanById"],
        mutationFn: ({
            produkId,
            varianId,
            ulasanId,
        }: {
            produkId: number;
            varianId: number;
            ulasanId: number;
        }) => deleteUlasanById(produkId, varianId, ulasanId),
        onSuccess: (
            _res,
            { produkId, varianId }: { produkId: number; varianId: number }
        ) => {
            queryClient.prefetchQuery({
                queryKey: ["UseGetUlasanList", produkId, varianId],
                queryFn: () => getUlasanList(produkId, varianId),
            });
        },
    });
}

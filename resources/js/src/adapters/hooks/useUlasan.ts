import { queryClient } from "../../main";
import {
    TAddUlasanSchema,
    TUpdateUlasanSchema,
} from "../../modules/ulasan/schema";
import {
    addUlasan,
    deleteUlasanById,
    getUlasanList,
    updateUlasan,
} from "../api/ulasan";
import { useQuery, useMutation } from "@tanstack/react-query";

// show all
export function UseGetUlasanList(produkId: number, varianId: number) {
    return useQuery({
        queryKey: ["UseGetUlasanList", produkId, varianId],
        queryFn: () => getUlasanList(produkId, varianId),
    });
}

// add ulasan
export function useAddUlasan() {
    return useMutation({
        mutationKey: ["useAddUlasan"],
        mutationFn: (
            param: TAddUlasanSchema & { produkId: number; varianId: number }
        ) => addUlasan(param),
        onSuccess: (
            _r: any,
            vars: TAddUlasanSchema & { produkId: number; varianId: number }
        ) => {
            queryClient.prefetchQuery({
                queryKey: [
                    "UseGetUlasanList",
                    vars.produkId.toString(),
                    vars.varianId.toString(),
                ],
                queryFn: () => getUlasanList(vars.produkId, vars.varianId),
            });
        },
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
            _r: any,
            vars: { produkId: number; varianId: number; ulasanId: number }
        ) => {
            queryClient.prefetchQuery({
                queryKey: [
                    "UseGetUlasanList",
                    vars.produkId.toString(),
                    vars.varianId.toString(),
                ],
                queryFn: () => getUlasanList(vars.produkId, vars.varianId),
            });
        },
    });
}

// update ulasan
export function useEditUlasan() {
    return useMutation({
        mutationKey: ["useEditUlasan"],
        mutationFn: (
            param: TUpdateUlasanSchema & {
                produkId: number;
                varianId: number;
                ulasanId: number;
            }
        ) => updateUlasan(param),
        onSuccess: (
            _r: any,
            vars: {
                produkId: number;
                varianId: number;
                ulasanId: number;
            }
        ) => {
            queryClient.prefetchQuery({
                queryKey: [
                    "UseGetUlasanList",
                    vars.produkId.toString(),
                    vars.varianId.toString(),
                ],
                queryFn: () => getUlasanList(vars.produkId, vars.varianId),
            });
        },
    });
}

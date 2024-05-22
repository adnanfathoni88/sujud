import { useMutation, useQuery } from "@tanstack/react-query";
import {
    addAdmin,
    deleteAdminById,
    getAdminList,
    updateAdmin,
} from "../api/admin";
import { queryClient } from "../../main";
import {
    TAddAdminSchema,
    TUpdateAdminSchema,
} from "../../modules/admin/schema";

// list admin
export function useGetAdminList() {
    return useQuery({
        queryKey: ["useGetAdminList"],
        queryFn: () => getAdminList(),
    });
}

// add admin
export function useAddAdmin() {
    return useMutation({
        mutationKey: ["useAddAdmin"],
        mutationFn: (param: TAddAdminSchema) => addAdmin(param),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetAdminList"],
                queryFn: () => getAdminList(),
            });
        },
    });
}

// update admin
export function useUpdateAdmin() {
    return useMutation({
        mutationKey: ["useUpdateAdmin"],
        mutationFn: (
            param: TUpdateAdminSchema & {
                id: number;
            }
        ) => updateAdmin(param),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetAdminList"],
                queryFn: () => getAdminList(),
            });
        },
    });
}

// delete admin
export function useDeleteAdminById() {
    return useMutation({
        mutationKey: ["useDeleteAdminById"],
        mutationFn: (id: number) => deleteAdminById(id),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetAdminList"],
                queryFn: () => getAdminList(),
            });
        },
    });
}

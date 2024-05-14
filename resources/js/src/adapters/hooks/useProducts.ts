import { useMutation, useQuery } from "@tanstack/react-query";
import {
    deleteProductById,
    getProductById,
    getProductList,
} from "../api/products";
import { queryClient } from "../../main";

export function useGetProductList() {
    return useQuery({
        queryKey: ["useGetProductList"],
        queryFn: () => getProductList(),
    });
}

export function useGetProductById({ id }: { id: number }) {
    return useQuery({
        queryKey: ["useGetProductById", id],
        queryFn: () => getProductById(id),
    });
}

export function useDeleteProductById({ id }: { id: number }) {
    return useMutation({
        mutationKey: ["useDeleteProductById", id],
        mutationFn: () => deleteProductById(id),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetProductList"],
                queryFn: () => getProductList(),
            });
        },
    });
}

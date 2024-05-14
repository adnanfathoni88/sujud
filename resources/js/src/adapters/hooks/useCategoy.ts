import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    getCategoryList,
    getCategoryById,
    addCategory,
    editCategoryById,
    deleteCategoryById,
} from "../api/category";
import { queryClient } from "../../main";

// show all
export function useGetCategoryList() {
    return useQuery({
        queryKey: ["useGetCategoryList"],
        queryFn: () => getCategoryList(),
    });
}

// detail
export function useGetCategoryById({ id }: { id: number }) {
    return useQuery({
        queryKey: ["useGetCategoryById", id],
        queryFn: () => getCategoryById(id),
    });
}

// create
export function useAddCategory({ nama }: { nama: string }) {
    return useMutation({
        mutationKey: ["AddCategory", nama],
        mutationFn: () => addCategory(nama),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetCategoryList"],
                queryFn: () => getCategoryList(),
            });
        },
    });
}

// edit
export function useEditCategory(
    { id }: { id: number },
    { nama }: { nama: string }
) {
    return useMutation({
        mutationKey: ["EditCategory", id, nama],
        mutationFn: () => editCategoryById(id, nama),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetCategoryList"],
                queryFn: () => getCategoryList(),
            });
        },
    });
}

// delete
export function useDeleteCategoryById({ id }: { id: number }) {
    return useMutation({
        mutationKey: ["useDeleteCategoryById", id],
        mutationFn: () => deleteCategoryById(id),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetCategoryList"],
                queryFn: () => getCategoryList(),
            });
        },
    });
}

import { useMutation, useQuery } from "@tanstack/react-query";
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
export function useAddCategory() {
    return useMutation({
        mutationKey: ["AddCategory"],
        mutationFn: (nama: string) => addCategory(nama),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetCategoryList"],
                queryFn: () => getCategoryList(),
            });
        },
    });
}

// edit
export function useEditCategory() {
    return useMutation({
        mutationKey: ["useEditCategory"],
        mutationFn: ({id, nama}: { id: number, nama: string }) => editCategoryById(id, nama),
        onSuccess: () => {},
    });
}

// delete
export function useDeleteCategoryById() {
    return useMutation({
        mutationKey: ["useDeleteCategoryById"],
        mutationFn: ({ id }: { id: number }) => deleteCategoryById(id),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetCategoryList"],
                queryFn: () => getCategoryList(),
            });
        },
    });
}

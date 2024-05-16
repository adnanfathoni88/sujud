import { useMutation, useQuery } from "@tanstack/react-query";
import {
    addProduct,
    deleteProductById,
    getProductById,
    getProductList,
} from "../api/products";
import { queryClient } from "../../main";
import { TAddProductSchema } from "../../modules/product/product-add/schema";

// show all
export function useGetProductList() {
    return useQuery({
        queryKey: ["useGetProductList"],
        queryFn: () => getProductList(),
    });
}

// // create
// export function useAddProduct({ data: { kode, nama, deskripsi } }) {
//     const data = { kode, nama, deskripsi };

//     return useMutation({
//         mutationKey: ["AddCategory"],
//         mutationFn: (data) => addProduct(data),
//         onSuccess: () => {
//             queryClient.prefetchQuery({
//                 queryKey: ["useGetCategoryList"],
//                 queryFn: () => getProductList(),
//             });
//         },
//     });
// }

// Update hook to accept additional inputs
export function useAddProduct() {
    return useMutation({
        mutationKey: ["useAddCategory"],
        mutationFn: (param: TAddProductSchema) => addProduct(param),
        onSuccess: () => {
            queryClient.prefetchQuery({
                queryKey: ["useGetProductList"],
                queryFn: () => useGetProductList,
            });
        },
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

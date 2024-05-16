import { useMutation, useQuery } from "@tanstack/react-query";
import {
    addProduct,
    deleteProductById,
    getProductById,
    getProductList,
} from "../api/products";
import { queryClient } from "../../main";

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
export function useAddProduct({
    kode,
    nama,
    deskripsi,
    harga,
    warna,
    stok,
    image,
    ukuran,
    kategoriId,
}: {
    kode: string;
    nama: string;
    deskripsi: string;
    harga: number;
    warna: string;
    stok: number;
    image: File;
    ukuran: string;
    kategoriId: number;
}) {
    return useMutation({
        mutationKey: ["AddCategory", nama],
        mutationFn: () =>
            addProduct({
                kode,
                nama,
                deskripsi,
                harga,
                warna,
                stok,
                image,
                ukuran,
                kategoriId,
            }), // Pass additional inputs
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

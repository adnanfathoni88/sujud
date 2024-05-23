import { useMutation, useQuery } from "@tanstack/react-query";
import {
	addProduct,
	deleteProductById,
	getProductById,
	getProductList,
	updateProduct,
} from "../api/products";
import { queryClient } from "../../main";
import { TUpdateProductSchema } from "../../modules/product-list/schema";
import { TAddProductSchema } from "../../modules/product-add/schema";

// show all
export function useGetProductList({ q, page, kategori_id }: { q?: string, page?: number, kategori_id?: number}) {
	return useQuery({
		queryKey: ["useGetProductList", q, page, kategori_id],
		queryFn: () => getProductList({ q, page, kategori_id }),
	});
}

export function useAddProduct() {
	return useMutation({
		mutationKey: ["useAddProduct"],
		mutationFn: (param: TAddProductSchema) => addProduct(param),
		onSuccess: () => {
			queryClient.prefetchQuery({
				queryKey: ["useGetProductList"],
				queryFn: () => getProductList(),
			});
		},
	});
}

export function useEditProduct() {
	return useMutation({
		mutationKey: ["useEditProduct"],
		mutationFn: (param: TUpdateProductSchema & { id: number }) => updateProduct(param),
		onSuccess: (_res, current: TUpdateProductSchema & { id: number }) => {
			queryClient.prefetchQuery({
				queryKey: ["useGetProductById", current.id.toString()],
				queryFn: () => getProductById(current.id),
			});
			queryClient.prefetchQuery({
				queryKey: ["useGetProductList"],
				queryFn: () => getProductList(),
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

export function useDeleteProductById() {
	return useMutation({
		mutationKey: ["useDeleteProductById"],
		mutationFn: ({ id }: { id: number }) => deleteProductById(id),
		onSuccess: () => {
			queryClient.prefetchQuery({
				queryKey: ["useGetProductList"],
				queryFn: () => getProductList(),
			});
		},
	});
}
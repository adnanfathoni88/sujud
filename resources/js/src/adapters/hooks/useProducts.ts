import { useMutation, useQuery } from "@tanstack/react-query";
import {
	addProduct,
	deleteProductById,
	getProductById,
	getProductList,
	updateProduct,
} from "../api/products";
import { queryClient } from "../../main";
import { TAddProductSchema } from "../../modules/product/product-add/schema";
import { TUpdateProductSchema } from "../../modules/product-list/schema";

// show all
export function useGetProductList({ q, page }: { q?: string, page?: number }) {
	return useQuery({
		queryKey: ["useGetProductList", q, page],
		queryFn: () => getProductList({ q, page }),
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
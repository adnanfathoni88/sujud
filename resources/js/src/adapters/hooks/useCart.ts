import { useMutation, useQuery } from "@tanstack/react-query"
import { addToCart, deleteCart, getCart, updateCart } from "../api/cart"
import { queryClient } from "../../main"

export const useAddToCart = () => {
	return useMutation({
		mutationKey: ["useAddToCart"],
		mutationFn: ({ varianId, produkId, qty }: { varianId: number, produkId: number, qty: number }) => addToCart({ varianId, produkId, qty})
	})
}


export const useGetCartList = () => {
	return useQuery({
		queryKey: ["useGetCartList"],
		queryFn: () => getCart()
	})
}

export const useUpdateCart = () => {
	return useMutation({
		mutationKey: ["useUpdateCart"],
		mutationFn: ({ produkId, varianId, id, qty }: { produkId: number, varianId: number, id: number, qty: number }) => updateCart({ produkId, varianId, id, qty}),
		onSuccess: () => {
			queryClient.prefetchQuery({
				queryKey: ["useGetCartList"],
				queryFn: () => getCart()
			})
		}
	})
}

export const useDeleteCart = () => {
	return useMutation({
		mutationKey: ["useDeleteCart"],
		mutationFn: ({ produkId, varianId, id }: { produkId: number, varianId: number, id: number }) => deleteCart({ produkId, varianId, id}),
		onSuccess: () => {
			queryClient.prefetchQuery({
				queryKey: ["useGetCartList"],
				queryFn: () => getCart()
			})
		}
	})
}
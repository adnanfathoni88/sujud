import { useMutation, useQuery } from "@tanstack/react-query";
import { addVarian, deleteVarianById, editVarianById, getVarianList } from "../api/varian";
import { TAddVarian, TUpdateVarian } from "../../modules/product-detail/schema";
import { queryClient } from "../../main";

export const useGetVariantList = ({ productId }: { productId: number }) => {
	return useQuery({
		queryKey: ["useVariantList", productId],
		queryFn: () => getVarianList({ productId }),
	});
}

export const useEditVarianById = () => {
	return useMutation({
		mutationKey: ["useEditVarianById"],
		mutationFn: ({ id, productId, body }: { id: number, productId: number, body: TUpdateVarian }) => editVarianById({ id, productId }, body),
		onSuccess: (_res, current: { id: number, productId: number, body: TUpdateVarian } & { id: number }) => {
			queryClient.prefetchQuery({
				queryKey: ["useVariantList", current.productId.toString()],
				queryFn: () => getVarianList({ productId: current.productId }),
			});
		}
	})
}

export const useAddVarian = () => {
	return useMutation({
		mutationKey: ["useAddVarian"],
		mutationFn: ({ productId, body }: { productId: number, body: TAddVarian }) => addVarian({ productId }, body),
		onSuccess: (_res, current: { productId: number, body: TUpdateVarian } & { id: number }) => {
			queryClient.prefetchQuery({
				queryKey: ["useVariantList", current.productId.toString()],
				queryFn: () => getVarianList({ productId: current.productId }),
			});
		}
	})
}

export const useDeleteVarianById = () => {
	return useMutation({
		mutationKey: ["useDeleteVarianById"],
		mutationFn: ({ id, productId }: { id: number, productId: number }) => deleteVarianById({ id, productId }),
		onSuccess: (_res, current: { id: number, productId: number } & { id: number }) => {
			queryClient.prefetchQuery({
				queryKey: ["useVariantList", current.productId.toString()],
				queryFn: () => getVarianList({ productId: current.productId }),
			});
		}
	})
}
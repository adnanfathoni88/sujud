import { useMutation, useQuery } from "@tanstack/react-query"
import { getOngkirDetail, getOngkirList, updateOngkir, updateOngkirSetResi } from "../api/ongkir"
import { TUpdateOngkir } from "../../modules/ongkir-detail/schema"
import { queryClient } from "../../main"

export const useGetOngkirList = ({ page, status }: { page?: number, status?: string }) => {
	return useQuery({
		queryKey: ["useGetOngkirList", page, status],
		queryFn: () => getOngkirList({ page, status }),
	})
}

export const useGetOngkirDetail = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ["useGetOngkirDetail", id],
		queryFn: () => getOngkirDetail(id),
	})
}

export const useUpdateOngkir = () => {
	return useMutation({
		mutationKey: ["useUpdateOngkir"],
		mutationFn: (param: TUpdateOngkir & { ongkirId: number }) => updateOngkir(param),
		onSuccess: (_res, param) => {
			queryClient.resetQueries({
				queryKey: ["useGetOngkirDetail", param.ongkirId]
			})
		}
	})
}

export const useUpdateOngkirSetResi = () => {
	return useMutation({
		mutationKey: ["useUpdateOngkirSetResi"],
		mutationFn: (param: { resi: string, ongkirId: number, page?: number, status?: string }) => updateOngkirSetResi(param),
		onSuccess: (_res, { page, status }) => {
			queryClient.prefetchQuery({
				queryKey: ["useGetOngkirList", page, status],
				queryFn: () => getOngkirList({ page, status }),
			})
		}
	})
}
import { useMutation, useQuery } from "@tanstack/react-query"
import { getOngkirDetail, getOngkirList, updateOngkir } from "../api/ongkir"
import { TUpdateOngkir } from "../../modules/ongkir-detail/schema"
import { queryClient } from "../../main"

export const useGetOngkirList = ({ page, isConfirmed }: { page?: number, isConfirmed?: boolean }) => {
	return useQuery({
		queryKey: ["useGetOngkirList", page, isConfirmed],
		queryFn: () => getOngkirList({ page, isConfirmed }),
	})
}

export const useGetOngkirDetail = ({id}: { id: number }) => {
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
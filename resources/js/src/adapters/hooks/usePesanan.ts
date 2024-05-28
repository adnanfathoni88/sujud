import { useMutation, useQuery } from "@tanstack/react-query"
import { createPesanan, getPesanan, setPesananTelahSampai } from "../api/pesanan"
import { queryClient } from "../../main"

export const useCreatePesanan = () => {
	return useMutation({
		mutationKey: ["useCreatePesanan"],
		mutationFn: (param: { alamat: string, pesanan: { qty: number, varian_id: number }[] }) => createPesanan(param),
	})
}

export const useGetPesanan = ({ page, status, isConfirmed, isArrived }: { isArrived?: boolean, page?: number, status?: 'dibayar' | 'failed' | 'belum-bayar', isConfirmed?: boolean}) => {
	return useQuery({
		queryKey: ["useGetPesanan", page, status, isConfirmed, isArrived],
		queryFn: () => getPesanan({ page, status, isConfirmed, isArrived}),
	})
}

export const useSetPesananTelahSampai = () => {
	type TParam = { 
		id: number, 
		page?: number, 
		isArrived?: boolean,
		isConfirmed?: boolean, 
		status?: 'dibayar' | 'failed' | 'belum-bayar',
	}

	return useMutation({
		mutationKey: ["useSetPesananTelahSampai"],
		mutationFn: (param: TParam) => setPesananTelahSampai(param.id),
		onSuccess: (_res, args) => {
			queryClient.prefetchQuery({
				queryKey: ["useGetPesanan", args.page, args.status, args.isConfirmed, args.isArrived],
				queryFn: () => getPesanan({ page: args.page, status: args.status, isConfirmed: args.isConfirmed, isArrived: args.isArrived }),
			})
		}
	})
}
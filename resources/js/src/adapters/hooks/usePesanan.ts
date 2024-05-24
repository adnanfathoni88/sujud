import { useMutation, useQuery } from "@tanstack/react-query"
import { createPesanan, getPesanan } from "../api/pesanan"

export const useCreatePesanan = () => {
	return useMutation({
		mutationKey: ["useCreatePesanan"],
		mutationFn: (param: { alamat: string, pesanan: { qty: number, varian_id: number }[] }) => createPesanan(param),
	})
}

export const useGetPesanan = ({ page, status, isConfirmed, isArrived }: { isArrived?: boolean, page?: number, status?: 'dibayar' | 'failed' | 'belum-bayar', isConfirmed?: boolean}) => {
	console.log(isConfirmed)
	return useQuery({
		queryKey: ["useGetPesanan", page, status, isConfirmed, isArrived],
		queryFn: () => getPesanan({ page, status, isConfirmed, isArrived}),
	})
}
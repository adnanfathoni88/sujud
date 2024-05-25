import { useQuery } from "@tanstack/react-query"
import { checkTransaction, transactionList, transactionPaymentMethod } from "../api/transaksi"

export const useTransaksiMetodeBayar = ({ pesananGrup }: { pesananGrup: string }) => {
	return useQuery({
		queryKey: ["useTransaksi", pesananGrup],
		queryFn: () => transactionPaymentMethod({ pesananGrup })
	})
}

export const useGetTransaksiList = ({ status, page, q }: { q?: string, page?: number, status: string }) => {
	const s = status === 'FAILED' ? 'FAILED' : 'SUCCESS'
	return useQuery({
		queryKey: ["useTransaksiList", s, page, q],
		queryFn: () => transactionList({ status: s, page, q })
	})
}

export const useCheckTransaction = ({ pesananGrup }: { pesananGrup?: string }) => {
	return useQuery({
		queryKey: ["useCheckTransaction", pesananGrup],
		queryFn: () => checkTransaction({ pesanan_grup: pesananGrup })
	})
}
import { IPaymentMethodList } from "../../interfaces/payment-method";
import { IRequestTransaction } from "../../interfaces/request-transaction";
import { ITransactionStatus, ITransaksiList } from "../../interfaces/transaksi";
import { api } from "../../services/api";

export async function transactionPaymentMethod({ pesananGrup }: { pesananGrup: string }) {
	const res = await api.get(`/pesanan/${pesananGrup}/transaksi/metode-bayar`)
	return res.data as { response: { paymentFee: IPaymentMethodList } }
}

export async function requestTransaction({ pesananGrup, paymentMethod }: { pesananGrup: string, paymentMethod: string }) {
	const res = await api.get(`/pesanan/${pesananGrup}/transaksi/metode-bayar/${paymentMethod}`)
	return res.data as { response: IRequestTransaction }
}

export async function transactionList({ status, page, q }: { q?: string, page?:number, status: string }) {
	const searchParam = new URLSearchParams()
	if (page) searchParam.set('page', page.toString())
	if (q) searchParam.set('pesanan_grup', q.toString())
	searchParam.set('status', status === 'FAILED' ? 'FAILED' : 'SUCCESS')

	const res = await api.get(`/transaksi?${searchParam.toString()}`)
	return res.data as { response: { data: ITransaksiList, next_page_url?: string } }
}

export async function checkTransaction({ pesanan_grup }: { pesanan_grup?: string }) {
	if(!pesanan_grup) return null
	const res = await api.get(`/transaksi/${pesanan_grup}/status`)
	return res.data as { response: ITransactionStatus }
}


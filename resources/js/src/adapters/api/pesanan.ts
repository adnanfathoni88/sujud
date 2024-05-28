import { IOngkirListWithPesanan } from "../../interfaces/ongkir";
import { api } from "../../services/api";

export async function createPesanan(param: { alamat: string, pesanan: { qty: number, varian_id: number }[] }) {
	const res = await api.post(`/pesanan`, param);
	return res.data;
}

export async function getPesanan({ page, status, isConfirmed, isArrived }: { isArrived: boolean, page?: number, status?: 'dibayar' | 'failed' | 'belum-bayar', isConfirmed?: boolean}) {
	const searchParams = new URLSearchParams();
	searchParams.append('status', status ?? 'belum-bayar');
	searchParams.append('page', page ? page.toString() : '1');
	searchParams.append('isArrived', Boolean(isArrived).toString());
	searchParams.append('isConfirmed', Boolean(isConfirmed).toString());
	const res = await api.get(`/pesanan?${searchParams.toString()}`);
	return res.data as { response: { data: IOngkirListWithPesanan, next_page_url?: string } };
}

export async function setPesananTelahSampai(id: number) {
	const res = await api.put(`/pesanan/${id}/set-telah-sampai`);
	return res.data;
}
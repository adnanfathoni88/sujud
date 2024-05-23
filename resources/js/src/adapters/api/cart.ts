import { ICartList } from "../../interfaces/cart";
import { api } from "../../services/api";

export async function addToCart({ varianId, produkId, qty }: { varianId: number, produkId: number, qty: number }) {
    const res = await api.post(`/produk/${produkId}/varian/${varianId}/cart`, { qty });
    return res.data;
}

export async function getCart() {
	const res = await api.get(`/cart`);
	return res.data as { response: ICartList };
}

export async function updateCart({ produkId, varianId, id, qty }: { produkId: number, varianId: number, id: number, qty: number }) {
	const res = await api.put(`/produk/${produkId}/varian/${varianId}/cart/${id}`, { qty });
	return res.data;
}


export async function deleteCart({ produkId, varianId, id }: { produkId: number, varianId: number, id: number }) {
	const res = await api.delete(`/produk/${produkId}/varian/${varianId}/cart/${id}`);
	return res.data;
}
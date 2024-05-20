import { IVariant, IVariantList } from "../../interfaces/variant";
import { TAddVarian, TUpdateVarian } from "../../modules/product-detail/schema";
import { api } from "../../services/api";

export async function getVarianList({ productId }: { productId: number }) {
	const res = await api.get(`/produk/${productId}/varian`);
	return res.data as { response: IVariantList };
}

export async function getVarianById({ id, productId }: { id: number, productId: number }) {
	const res = await api.get(`/produk/${productId}/varian/${id}`);
	return res.data as { response: IVariant };
}

export async function editVarianById({ id, productId }: { id: number, productId: number }, param: TUpdateVarian) {
	if (param.image === null) delete param.image;
	
	const formData = new FormData();
	formData.append("stok", param.stok);
	formData.append("warna", param.warna);
	formData.append("harga", param.harga);
	formData.append("ukuran", param.ukuran);
	formData.append('harga_diskon', param.harga_diskon)
	if (param.image) formData.append("image", param.image);

	const res = await api.post(`/produk/${productId}/varian/update/${id}`, formData);
	return res.data;
}

export async function addVarian({ productId }: { productId: number }, param: TAddVarian) {
	const formData = new FormData();
	formData.append("stok", param.stok);
	formData.append("warna", param.warna);
	formData.append("image", param.image);
	formData.append("harga", param.harga);
	formData.append("ukuran", param.ukuran);
	formData.append('harga_diskon', param.harga_diskon)

	const res = await api.post(`/produk/${productId}/varian`, formData);
	return res.data;
}

export async function deleteVarianById({ id, productId }: { id: number, productId: number }) {
	const res = await api.delete(`/produk/${productId}/varian/${id}`);
	return res.data;
}

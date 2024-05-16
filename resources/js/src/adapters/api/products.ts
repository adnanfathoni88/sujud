import { ErrorComponent } from "@tanstack/react-router";
import { apiJSONPlaceholder, api } from "../../services/api";
import { TAddProductSchema } from "../../modules/product/product-add/schema";

export type TProduct = {
	kode: string,
	nama: string,
	deskripsi: string,
}

export type TProductList = TProduct[]

export async function getProductList() {
	const res = await api.get("/produk");
	return res.data as { response: { data: TProductList } };
}

// export async function addProduct() {
//     const res = await api.post("/produk");
//     return res.data;
// }

// Update API function to accept additional inputs

export async function addProduct({
	kode,
	nama,
	deskripsi,
	harga,
	warna,
	image,
	stok,
	ukuran,
	kategori_id,
}: TAddProductSchema) {
	const formData = new FormData();
	formData.append("kode", kode);
	formData.append("nama", nama);
	formData.append("deskripsi", deskripsi);
	formData.append("harga", harga.toString());
	formData.append("warna", warna);
	formData.append("stok", stok.toString());
	formData.append("image", image[0]);
	formData.append("ukuran", ukuran);
	formData.append("kategori_id", kategori_id.toString());

	const res = await api.post(`/produk`, formData);

	return res.data;
}

export async function getProductById(id: number) {
	const res = await api.get(`/produk/${id}`);
	return res.data as { response: TProduct };
}

export async function deleteProductById(id: number) {
	const res = await apiJSONPlaceholder.delete(`/posts/${id}`);
	return res.data;
}

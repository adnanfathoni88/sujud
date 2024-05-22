import { api } from "../../services/api";
import { TAddProductSchema } from "../../modules/product-add/schema";
import { IProduct, IProductList } from "../../interfaces/product";
import { TUpdateProductSchema } from "../../modules/product-list/schema";

export async function getProductList(props?: { q?: string; page?: number }) {
    const query = new URLSearchParams();
    if (props?.q) query.append("q", props.q);
    if (props?.page) query.append("page", props.page.toString());
    const res = await api.get(`/produk?${query.toString()}`);
    return res.data as { response: { data: IProductList } };
}

export async function addProduct({
    kode,
    nama,
    deskripsi,
    harga,
    // warna,
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
    // formData.append("warna", warna);
    formData.append("stok", stok.toString());
    formData.append("image", image[0]);
    formData.append("ukuran", ukuran);
    formData.append("kategori_id", kategori_id.toString());

    const res = await api.post(`/produk`, formData);

    return res.data;
}

export async function updateProduct(p: TUpdateProductSchema & { id: number }) {
    const res = await api.put(`/produk/${p.id}`, p);
    return res.data;
}

export async function getProductById(id: number) {
    const res = await api.get(`/produk/${id}`);
    return res.data as { response: IProduct };
}

export async function deleteProductById(id: number) {
    const res = await api.delete(`/produk/${id}`);
    return res.data;
}

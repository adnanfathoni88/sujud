import { IUlasanList } from "../../interfaces/ulasan";
import { api } from "../../services/api";

export async function getUlasanList(produkId: number, varianId: number) {
    const res = await api.get(`/produk/${produkId}/varian/${varianId}/ulasan`);
    return res.data as { response: IUlasanList };
}

export async function deleteUlasanById(
    produkId: number,
    varianId: number,
    ulasanId: number
) {
    const res = await api.delete(
        `/produk/${produkId}/varian/${varianId}/ulasan/${ulasanId}`
    );
    return res.data;
}

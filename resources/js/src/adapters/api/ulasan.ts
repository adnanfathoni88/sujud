import { IUlasanList } from "../../interfaces/ulasan";
import { TAddUlasanSchema } from "../../modules/ulasan/schema";
import { api } from "../../services/api";

export async function getUlasanList(produkId: number, varianId: number) {
    const res = await api.get(`/produk/${produkId}/varian/${varianId}/ulasan`);
    return res.data as { response: { data: IUlasanList } };
}

// delete ulasan
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

// add ulasan
export async function addUlasan({
    produkId,
    varianId,
    konten,
    rating,
}: TAddUlasanSchema & { produkId: number, varianId: number }) {
    const formData = new FormData();
    formData.append("konten", konten);
    formData.append("rating", rating.toString());

    const res = await api.post(
        `/produk/${produkId}/varian/${varianId}/ulasan/`,
        formData
    );

    return res.data;
}

import { IBaseUlasan, IUlasanList } from "../../interfaces/ulasan";
// import { TAddUlasanSchema, TUpdateUlasanSchema } from "../../modules/ulasan/schema";
import { api } from "../../services/api";


export async function getUlasanByProdukId({ produkId, page }: { produkId: number; page?: number }) {
    const query = new URLSearchParams();
    if (page) query.append("page", page.toString());
	query.set('id_produk', produkId.toString());
	const res = await api.get(`/ulasan/ulasan-by-product?${query.toString()}`);
	return res.data as { response: { data: IUlasanList, next_page_url?: string } };
}

export async function getUlasanByVarian({ varianId }: { varianId: number }) {
	const res = await api.get(`/ulasan/ulasan-by-varian/${varianId}`);
	return res.data as { response: IBaseUlasan };
}

export async function postUlasanByVarian({ varianId, ulasan, rating }: { varianId: number; ulasan?: string; rating: number }) {
	const res = await api.post(`/ulasan/ulasan-by-varian/${varianId}`, { konten: ulasan ?? "", rating });
	return res.data;
}

export async function putUlasan({ id, ulasan, rating}: { id: number, ulasan?: string, rating?: number }) {
	const res = await api.put(`/ulasan/${id}`, { konten: ulasan ?? "", rating });
	return res.data;
}

export async function deleteUlasanById(id: number) {
	const res = await api.delete(`/ulasan/${id}`);
	return res.data;
}


// export async function getUlasanList(produkId: number, varianId: number) {
//     const res = await api.get(`/produk/${produkId}/varian/${varianId}/ulasan`);
//     return res.data as { response: { data: IUlasanList } };
// }

// // delete ulasan
// export async function deleteUlasanById(
//     produkId: number,
//     varianId: number,
//     ulasanId: number
// ) {
//     const res = await api.delete(
//         `/produk/${produkId}/varian/${varianId}/ulasan/${ulasanId}`
//     );
//     return res.data;
// }

// // add ulasan
// export async function addUlasan({
//     produkId,
//     varianId,
//     konten,
//     rating,
// }: TAddUlasanSchema & { produkId: number; varianId: number }) {
//     const formData = new FormData();
//     formData.append("konten", konten);
//     formData.append("rating", rating.toString());

//     const res = await api.post(
//         `/produk/${produkId}/varian/${varianId}/ulasan/`,
//         formData
//     );

//     return res.data;
// }

// export async function updateUlasan(
//     data: TUpdateUlasanSchema & {
//         produkId: number;
//         varianId: number;
//         ulasanId: number;
//     }
// ) {
//     const { produkId, varianId, ulasanId, konten, rating } = data;

//     const payload = {
//         konten,
//         rating,
//     };

//     const res = await api.put(
//         `/produk/${produkId}/varian/${varianId}/ulasan/${ulasanId}`,
//         payload,
//         {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }
//     );

//     return res.data;
// }


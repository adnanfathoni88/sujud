import { IReplyUlasan, IReplyUlasanList } from "../../interfaces/reply-ulasan";
import { api } from "../../services/api";

export async function getReplyUlasanList(props?: { page?: number }) {
    const query = new URLSearchParams();
    if (props?.page) query.append("page", props.page.toString());
    const res = await api.get(`/ulasan/user-ulasan?${query.toString()}`);
    return res.data as { response: { data: IReplyUlasanList, next_page_url?: string } };
}

export async function getUlasanByParentId(props: { parent_id: number }) {
	const res = await api.get(`/ulasan/${props.parent_id}`);
	return res.data as { response: IReplyUlasan }
}

export async function postReplyUlasan(props: { konten: string, parent_ulasan_id: number, id_varian: number }) {
	const res = await api.post(`/ulasan/${props.parent_ulasan_id}/varian/${props.id_varian}`, { konten: props.konten, rating: 0 });
	return res.data as any
}

export async function updateReplyUlasan(props: { konten: string, id: number }) {
	const res = await api.put(`/ulasan/${props.id}`, { konten: props.konten });
	return res.data as any
}

export async function deleteReplyUlasan(props: { id: number }) {
	const res = await api.delete(`/ulasan/${props.id}`);
	return res.data as any
}
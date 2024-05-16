import { api } from "../../services/api";

export type TCategory = { id: string, nama: string }
export type TCategoryList = TCategory[]

export async function getCategoryList() {
	const res = await api.get("/kategori");
	return res.data as { response: TCategoryList };
}

export async function getCategoryById(id: number) {
	const res = await api.get(`/kategori/${id}`);
	return res.data as { response: TCategory };
}
export async function editCategoryById(id: number, nama: string) {
	const res = await api.put(`/kategori/${id}`, { nama });
	return res.data;
}

export async function addCategory(nama: string) {
	const res = await api.post(`/kategori`, { nama });
	return res.data;
}

export async function deleteCategoryById(id: number) {
	const res = await api.delete(`/kategori/${id}`);
	return res.data;
}

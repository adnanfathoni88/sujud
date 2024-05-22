import { ICategory, ICategoryList } from "../../interfaces/category";
import { api } from "../../services/api";

export async function getCategoryList() {
    const res = await api.get("/kategori");
    return res.data as { response: ICategoryList };
}

export async function getCategoryById(id: number) {
    const res = await api.get(`/kategori/${id}`);
    return res.data as { response: ICategory };
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

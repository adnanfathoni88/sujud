import { apiJSONPlaceholder } from "../../services/api";

export async function getProductList() {
    const res = await apiJSONPlaceholder.get("/posts");
    return res.data;
}

export async function getProductById(id: number) {
    const res = await apiJSONPlaceholder.get(`/posts/${id}`);
    return res.data;
}

export async function deleteProductById(id: number) {
    const res = await apiJSONPlaceholder.delete(`/posts/${id}`);
    return res.data;
}

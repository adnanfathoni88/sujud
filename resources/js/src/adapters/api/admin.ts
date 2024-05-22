import { IAdminList } from "../../interfaces/admin";
import {
    TAddAdminSchema,
    TUpdateAdminSchema,
} from "../../modules/admin/schema";
import { api } from "../../services/api";

// show all
export async function getAdminList() {
    const res = await api.get("/user");
    return res.data as { response: IAdminList };
}

// create
export async function addAdmin({
    nama,
    email,
    nomor,
    password,
}: TAddAdminSchema) {
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("email", email);
    formData.append("nomor", nomor);
    formData.append("password", password);

    const res = await api.post("/user", formData);
    return res.data;
}

// edit
export async function updateAdmin(data: TUpdateAdminSchema & { id: number }) {
    const { id, role_id } = data;

    const payload = {
        role_id,
    };

    const res = await api.put(`/user/${id}`, payload);
    return res.data;
}

// hapus
export async function deleteAdminById(id: number) {
    const res = await api.delete(`/user/${id}`);
    return res.data;
}

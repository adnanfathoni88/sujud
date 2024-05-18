import { api } from "../../services/api";

export type TAdmin = { nama: string; password: string; email: string };
export type TAdminList = TAdmin[];

// export async function getAdminList() {
//     const res = await api.get("/admin");
//     return res.data as { response: TAdminList };
// }

export async function addAdmin({ nama, password, email }: TAdmin) {
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("password", password);
    formData.append("email", email);

    const res = await api.post(`/auth/register`, formData);

    return res.data;
}

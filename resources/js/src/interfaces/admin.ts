export interface IBaseAdmin {
    id: number;
    nama: string;
    email: string;
    nomor: string;
    alamat: string;
    role_id: number;
    gambar_id: number;
    created_at: string;
    updated_at: string;
}

export interface IAdminList extends Array<IBaseAdmin> {}

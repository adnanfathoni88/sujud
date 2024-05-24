import { IGambar } from "./gambar";

export interface IProfile {
	id: number;
	nama: string;
	nomor: string;
	email: string;
	alamat: string | null;
	gambar: IGambar | null;
	created_at: string;
	updated_at: string;
	role_id: number
}

export interface IProfileList extends Array<IProfile> {}	 

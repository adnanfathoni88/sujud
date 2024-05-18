import { IGambar } from "./gambar";

export interface IVariant {
	id: number;
	warna: string;
	ukuran: string;
	harga: number;
	stok: number;
	harga_diskon: number | null;
	created_at: string;
	updated_at: string;
	produk_id: number;
	gambar_id: number;
	gambar: IGambar;
}

export interface IVariantList extends Array<IVariant> {}
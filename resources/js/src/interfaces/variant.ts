import { IGambar } from "./gambar";
import { IProduct } from "./product";

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
	produk?: IProduct
}

export interface IVariantList extends Array<IVariant> {}
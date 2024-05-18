import { ICategory } from "./category";
import { IVariant, IVariantList } from "./variant";

export interface IBaseProduct {
	id: number;
	nama: string;
	kode: string;
	deskripsi: string;
	kategori_id: string;
	thumbnail: string;
	created_at: string;
	updated_at: string;
	kategori: ICategory;
}

export interface IProduct extends IBaseProduct {
	variants: IVariantList;
}

export interface IBaseProductList extends IBaseProduct {
	varian: IVariant;
}

export interface IProductList extends Array<IBaseProductList> {}	 

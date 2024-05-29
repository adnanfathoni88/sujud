import { ICategory } from "./category";
import { IVariant, IVariantList } from "./variant";

export interface IBaseProduct {
	id: number;
	nama: string;
	kode: string;
	deskripsi: string;
	kategori_id: string;
	created_at: string;
	updated_at: string;
	thumbnail?: string;
	kategori: ICategory;
}

export interface IProduct extends IBaseProduct {
	varians: IVariantList;
}

export interface IBaseProductList extends IBaseProduct {
	varian: IVariant;
}


export interface IProductList extends Array<IBaseProductList> {}	 

export interface IProductTopSale extends IBaseProductList {
	varian: IVariant;
	rating: number;
	total_pembelian: number;
}

export interface IProductTopSaleList extends Array<IProductTopSale> {}

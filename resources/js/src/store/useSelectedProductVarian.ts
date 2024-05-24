import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IVariant } from "../interfaces/variant";

export interface ISelectedProductVarian extends IVariant {
	setValue: (url: IVariant) => void;
}

export const useSelectedProductVarian = create<ISelectedProductVarian>()(
	devtools(
		(set) => ({
			id: 0,
			stok: 0,
			harga: 0,
			warna: '',
			ukuran: '',
			gambar_id: 0,
			produk_id: 0,
			created_at: '',
			updated_at: '',
			harga_diskon: null,
			gambar: {
				id: 0,
				nama: '',
				created_at: '',
				updated_at: '',
				produk_id: 0,
			},
			setValue: (value: IVariant) => set((s) => ({ ...s, ...value })),
		}),
		{
			name: 'SelectedProductVarian',
		}
	)
);
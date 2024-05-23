import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IProfile } from "../interfaces/profile";

export interface IProfileStore extends IProfile {
	setValue: (value: IProfile) => void;
}

export const useProfileStore = create<IProfileStore>()(
	devtools(
		(set) => ({
			id: 0,
			nama: '',
			nomor: '',
			email: '',
			role_id: 0,
			alamat: null,
			gambar: null,
			created_at: '',
			updated_at: '',
			setValue: (value: IProfile) => set((s) => ({ ...s, ...value })),
		}),
		{
			name: 'SelectedProductVarian',
		}
	)
);
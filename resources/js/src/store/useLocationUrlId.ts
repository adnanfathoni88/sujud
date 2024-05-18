// create zustand store

import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface ILocationUrlId {
	value: string;
	setValue: (url: string) => void;
}

export const useLocationUrlId = create<ILocationUrlId>()(
	devtools(
		(set) => ({
			value: "",
			setValue: (url: string) => set((s) => ({ ...s, value: url })),
		}),
		{
			name: 'bear-storage',
		}
	)
);
import { z } from "zod";

export const UpdateVarian = z.object({
	warna: z.string().max(255),
	ukuran: z.string().max(255),
	harga: z.string().max(255),
	stok: z.string().max(255),
	harga_diskon: z.string().min(1).max(255),
	image: z.any()
		.transform((file) => file?.[0])
		.refine((file) => {
			if(!file) return true;
			return (file?.size / (1024 * 1024)) <= 5
		}, `Max image size is 5MB.`)
		.refine((file) => {
			if(!file) return true;
			const allowed = ['image/jpeg', 'image/png', 'image/webp'];
			return allowed.includes(file?.type)
		},"Only .jpg, .jpeg, .png and .webp formats are supported.")
});


export const AddVarian = z.object({
	warna: z.string().max(255),
	ukuran: z.string().max(255),
	harga: z.string().max(255),
	stok: z.string().max(255),
	harga_diskon: z.string().min(1).max(255),
	image: z.any()
		.transform((file) => file?.[0])
		.refine((file) => file, "Image is required.")
		.refine((file) => (file?.size / (1024 * 1024)) <= 5, `Max image size is 5MB.`)
		.refine((file) => [
			'image/png',
			'image/jpg',
			'image/jpeg',
			'image/webp',
		].includes(file?.type),"Only .jpg, .jpeg, .png and .webp formats are supported.")
});


export type TUpdateVarian = z.infer<typeof UpdateVarian>;
export type TAddVarian = z.infer<typeof AddVarian>;
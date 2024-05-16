import { z } from "zod";

export const AddProductSchema = z.object({
	kode: z.string().max(255),
	nama: z.string().max(255),
	deskripsi: z.string().max(255),
});

export type TAddProductSchema = z.infer<typeof AddProductSchema>;
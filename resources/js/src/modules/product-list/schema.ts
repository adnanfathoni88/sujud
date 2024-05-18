import { z } from "zod";

export const UpdateProductSchema = z.object({
	kode: z.string().max(255),
	nama: z.string().max(255),
	deskripsi: z.string().max(255),
	kategori_id: z.string().max(255),
});

export type TUpdateProductSchema = z.infer<typeof UpdateProductSchema>;
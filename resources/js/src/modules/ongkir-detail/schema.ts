import { z } from "zod";

export const UpdateOngkir = z.object({
	berat: z.any()
		.transform(v => Number(v))
		.refine(v => !isNaN(v), { message: "Berat harus berupa angka" })
		.refine(v => v > 0, { message: "Berat harus lebih dari 0" }),
	ongkir: z.any()
		.transform(v => Number(v))
		.refine(v => !isNaN(v), { message: "Ongkir harus berupa angka" })
		.refine(v => v > 0, { message: "Ongkir harus lebih dari 0" }),
	ekspedisi: z.string().min(1).max(255),
});

export type TUpdateOngkir = z.infer<typeof UpdateOngkir>;

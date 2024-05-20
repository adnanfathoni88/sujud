import { z } from "zod";

export const RegisterSchema = z.object({
	name: z.string().min(3).max(255),
	email: z.string().email().max(255),
	password: z.string().min(8).max(255),
	nomor: z.string().min(10).max(15)
		.refine((v) => v.startsWith('+62'), {
			message: 'Nomor harus diawali dengan +62',
		})
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
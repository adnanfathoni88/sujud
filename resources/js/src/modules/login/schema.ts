import { z } from "zod";

export const LoginSchema = z.object({
	email: z.string().email().max(255),
	password: z.string().min(8).max(255),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
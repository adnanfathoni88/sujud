import { z } from "zod";

export const AddAdminSchema = z.object({
    nama: z.string().max(255),
    email: z.string().email(),
    nomor: z.string().max(255),
    password: z.string().max(255),
});

export const UpdateAdminSchema = z.object({
    role_id: z.string().max(255),
});

export type TAddAdminSchema = z.infer<typeof AddAdminSchema>;
export type TUpdateAdminSchema = z.infer<typeof UpdateAdminSchema>;

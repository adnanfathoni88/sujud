import { z } from "zod";

export const AddUlasanSchema = z.object({
    konten: z.string().max(255),
    rating: z.number().int().min(1).max(5),
});

export const UpdateUlasanSchema = z.object({
    konten: z.string().max(255),
    rating: z.number().int().min(1).max(5),
});

export type TAddUlasanSchema = z.infer<typeof AddUlasanSchema>;
export type TUpdateUlasanSchema = z.infer<typeof UpdateUlasanSchema>;

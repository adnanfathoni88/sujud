import { z } from "zod";

export const AddUlasanSchema = z.object({
    produkId: z.number().int(),
    varian_id: z.number().int(),
    konten: z.string().max(255),
    rating: z.number().int().min(1).max(5),
    user_id: z.number().int(),
    parent_id: z.number().int().optional(),
});

export type TAddUlasanSchema = z.infer<typeof AddUlasanSchema>;

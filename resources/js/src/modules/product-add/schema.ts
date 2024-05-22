import { z } from "zod";

export const AddProductSchema = z.object({
    kode: z.string().max(255),
    nama: z.string().max(255),
    deskripsi: z.string().max(255),
    kategori_id: z.string().max(255),
    // warna: z.string().max(255),
    ukuran: z.string().max(255),
    harga: z.string().max(255),
    stok: z.string().max(255),
    image: z
        .any()
        .refine((file) => file?.[0], "Image is required.")
        .refine(
            (file) => file?.[0]?.size / (1024 * 1024) <= 5,
            `Max image size is 5MB.`
        )
        .refine(
            (file) =>
                ["image/png", "image/jpg", "image/jpeg", "image/webp"].includes(
                    file?.[0]?.type
                ),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
});

export type TAddProductSchema = z.infer<typeof AddProductSchema>;

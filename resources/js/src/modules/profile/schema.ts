import { z } from "zod";

export const UpdateProfile = z.object({
	nama: z.string().max(255),
	email: z.string().email().max(255),
	nomor: z.string().min(10).max(15)
		.refine((v) => v.startsWith('+62'), {
			message: 'Nomor harus diawali dengan +62',
		})
});

export const UpdateProfilePicture = z.object({
	image: z.any()
		.refine((file) => file?.[0], "Image is required.")
		.refine((file) => (file?.[0]?.size / (1024 * 1024)) <= 5, `Max image size is 5MB.`)
		.refine((file) => [
			'image/png',
			'image/jpg',
			'image/jpeg',
			'image/webp',
		].includes(file?.[0]?.type),"Only .jpg, .jpeg, .png and .webp formats are supported.")
});

export type TUpdateProfile = z.infer<typeof UpdateProfile>;
export type TUpdateProfilePicture = z.infer<typeof UpdateProfilePicture>;
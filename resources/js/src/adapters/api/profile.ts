import { IProfile } from "../../interfaces/profile";
import { TUpdateProfile, TUpdateProfilePicture } from "../../modules/profile/schema";
import { api } from "../../services/api";

export async function getProfile() {
	const res = await api.get("/profile");
	return res.data as { response: IProfile };
}

export async function editProfile(body: TUpdateProfile) {
	const res = await api.put(`/profile`, body);
	return res.data;
}

export async function editProfilePicture(body: TUpdateProfilePicture) {
	const image = new FormData();
	image.append("image", body.image[0]);
	
	const res = await api.post(`/profile/picture`, image);
	return res.data;
}
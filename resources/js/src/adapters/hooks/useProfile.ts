import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../main";
import { editProfile, editProfilePicture, getProfile } from "../api/profile";
import { TUpdateProfile, TUpdateProfilePicture } from "../../modules/profile/schema";

// detail
export function useGetProfile() {
    return useQuery({
        queryKey: ["useGetProfile"],
        queryFn: () => getProfile(),
    });
}


export function useUpdateProfile() {
    return useMutation({
        mutationKey: ["useUpdateProfile"],
        mutationFn: (body: TUpdateProfile) => editProfile(body),
		onSuccess: () => {
			queryClient.prefetchQuery({
				queryKey: ["useGetProfile"],
				queryFn: () => getProfile(),
			});
		}
    });
}


export function useUpdateProfilePicture() {
    return useMutation({
        mutationKey: ["useUpdateProfilePicture"],
        mutationFn: (body: TUpdateProfilePicture) => editProfilePicture(body),
		onSuccess: () => {
			queryClient.prefetchQuery({
				queryKey: ["useGetProfile"],
				queryFn: () => getProfile(),
			});
		}
    });
}
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteReplyUlasan, getReplyUlasanList, getUlasanByParentId, postReplyUlasan, updateReplyUlasan } from "../api/reply-ulasan";
import { queryClient } from "../../main";

export const useGetReplyUlasanList = ({ page }: { page?: number }) => {
	console.log(page)
	return useQuery({
		queryKey: ["useGetReplyUlasanList", page],
		queryFn: () => getReplyUlasanList({ page }),
	})
}

export const useGetReplyUlasanByParentId = ({ parent_id }: { parent_id: number }) => {
	return useQuery({
		queryKey: ["useGetReplyUlasanByParentId", parent_id.toString()],
		queryFn: () => getUlasanByParentId({ parent_id }),
		retry: 2
	})
}

export const usePostReplyUlasan = () => {
	return useMutation({
		mutationKey: ["usePostReplyUlasan"],
		mutationFn: (props: { konten: string, parent_ulasan_id: number, id_varian: number, page?: number }) => postReplyUlasan(props),
		onSuccess: (_res, props) => {
			queryClient.prefetchQuery({
				queryKey: ["useGetReplyUlasanByParentId", props.parent_ulasan_id.toString()],
				queryFn: () => getUlasanByParentId({ parent_id: props.parent_ulasan_id })
			})
			queryClient.prefetchQuery({
				queryKey: ["useGetReplyUlasanList", props?.page],
				queryFn: () => getReplyUlasanList({ page: props?.page })
			})
		}
	})
}

export const useUpdateReplyUlasan = () => {
	return useMutation({
		mutationKey: ["useUpdateReplyUlasan"],
		mutationFn: (props: { konten: string, id: number, parent_ulasan_id: number, page?: number }) => updateReplyUlasan(props),
		onSuccess: (_res, props) => {
			queryClient.prefetchQuery({
				queryKey: ["useGetReplyUlasanByParentId", props.parent_ulasan_id.toString()],
				queryFn: () => getUlasanByParentId({ parent_id: props.parent_ulasan_id })
			})
			queryClient.prefetchQuery({
				queryKey: ["useGetReplyUlasanList", props?.page],
				queryFn: () => getReplyUlasanList({ page: props?.page })
			})
		}
	})
}

export const useDeleteReplyUlasan = () => {
	return useMutation({
		mutationKey: ["useDeleteReplyUlasan"],
		mutationFn: (props: { id: number, parent_ulasan_id: number, page?: number }) => deleteReplyUlasan(props),
		onSuccess: (_res, props) => {
			queryClient.resetQueries({
				queryKey: ["useGetReplyUlasanByParentId", props.parent_ulasan_id.toString()],
			})
			queryClient.prefetchQuery({
				queryKey: ["useGetReplyUlasanList", props?.page],
				queryFn: () => getReplyUlasanList({ page: props?.page })
			})
		}
	})
}
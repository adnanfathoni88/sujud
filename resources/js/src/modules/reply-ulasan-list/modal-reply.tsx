import { FaRegTrashAlt } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { IReplyUlasan } from "../../interfaces/reply-ulasan";
import Modal from "../../components/modal";
import { useRef, useState } from "react";
import { DialogPanel, DialogTitle } from "@headlessui/react";
import StarRating from "../../components/star-rating";
import Textarea from "../../components/textarea";
import { useDeleteReplyUlasan, useGetReplyUlasanByParentId, usePostReplyUlasan, useUpdateReplyUlasan } from "../../adapters/hooks/useReplyUlasan";
import { match } from "ts-pattern";
import Loader from "../../components/loader";
import { toastError, toastSuccess } from "../../utils/toast";
import { useSearch } from "@tanstack/react-router";

export default function ModalReply({ ulasan }: { ulasan: IReplyUlasan }) {
	const search = useSearch({ strict: false })
	const [open, setOpen] = useState(false);
	const newReply = usePostReplyUlasan()
	const updateReply = useUpdateReplyUlasan()
	const deleteReply = useDeleteReplyUlasan()
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const buttonDeleteRef = useRef<HTMLButtonElement>(null)
	const { data, isLoading } = useGetReplyUlasanByParentId({ parent_id: ulasan.id })

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const balasan = formData.get("balasan") as string
		if (!balasan.trim()) return
		if(isLoading) return
		if(newReply.isPending) return
		if(updateReply.isPending) return
		if(data?.response) {
			updateReply.mutate({ konten: balasan, id: data.response.id, parent_ulasan_id: ulasan.id, page: search?.page }, {
				onError: () => toastError("Balasan gagal diupdate"),
				onSuccess: () => toastSuccess("Balasan berhasil diupdate"),
			})
		} else {
			newReply.mutate({ konten: balasan, parent_ulasan_id: ulasan.id, id_varian: ulasan.varian_id, page: search?.page }, {
				onError: () => toastError("Balasan gagal ditambahkan"),
				onSuccess: () => toastSuccess("Balasan berhasil ditambahkan"),
			})
		}
	}

	const onDelete = (id: number) => () => deleteReply.mutate({ id, parent_ulasan_id: ulasan.id,  page: search?.page }, {
		onError: () => toastError("Balasan gagal dihapus"),
		onSuccess: () => toastSuccess("Balasan berhasil dihapus")
	})
	
	return (
		<Modal
			open={ open }
			onOpen={ () => setOpen(true) }
			onClose={ () => setOpen(false) }
			Trigger={ <button onClick={ () => setOpen(true) } className="hover:text-primary"><AiOutlineMessage size={ 20 } /></button> }
		>
			<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
				<DialogTitle as="h3" className="text-base/7 mb-5 font-semibold text-black dark:text-white flex items-center justify-between">
					<span>Reply Ulasan</span>
					<button onClick={ () => setOpen(false) }><IoMdClose size={ 20 } /></button>
				</DialogTitle>
				<h1>{ ulasan.user?.nama }</h1>
				<div className="my-3">
					<StarRating rating={ ulasan.rating } />
				</div>
				<p>{ ulasan.konten }</p>
				<hr className="my-5 border-black/30" />
				{ match(isLoading)
					.with(false, () => (
						<form onSubmit={ onSubmit }>
							<Textarea
								name="balasan"
								label="Balasan"
								defaultValue={ data?.response?.konten }
							/>
							<div className="flex justify-end items-center mt-5 gap-2">
								<button onClick={onDelete(data?.response?.id)} disabled={!Boolean(data?.response)} tabIndex={ -1 } type="button" className="p-3 rounded-lg bg-red-600 text-white">
									<FaRegTrashAlt size={ 16 } />
								</button>
								<button type="submit" className="p-3 rounded-lg bg-first text-white">
									<LuSendHorizonal size={ 16 } />
								</button>
							</div>
						</form>
					))
					.otherwise(() => <Loader />) }
			</DialogPanel>
		</Modal>
	)
}
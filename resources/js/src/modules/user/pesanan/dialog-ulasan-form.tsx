import { FaTrashCan } from "react-icons/fa6";
import { P, match } from "ts-pattern"
import { useDeleteUlasanById, useGetUlasanByVarian, usePostUlasanByVarian, usePutUlasan } from "../../../adapters/hooks/useUlasan"
import Loader from "../../../components/loader"
import Textarea from "../../../components/textarea"
import { useState } from "react"
import StarRatingWithAction from "../../../components/star-rating-with-action"
import { toastError, toastSuccess } from "../../../utils/toast"
import { IBaseUlasan } from "../../../interfaces/ulasan"

function NewUlasan({ varianId }: { varianId: number }) {
	const [rating, setRating] = useState<number>(0)
	const ulasan = usePostUlasanByVarian()

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const c = formData.get("ulasan") as string;
		if (!c) return
		if (rating < 1) return toastError("Rating tidak boleh kosong")

		const body = { varianId, ulasan: c, rating }

		ulasan.mutate(body, {
			onSuccess: () => toastSuccess("Ulasan berhasil ditambahkan"),
			onError: () => toastError("Ulasan gagal ditambahkan")
		})
	}

	return (
		<form className="flex flex-col gap-5" onSubmit={ onSubmit }>
			<div className="flex items-center gap-5">
				<div className="w-1/6">Rating</div>
				<div className="w-5/6">
					<StarRatingWithAction setRating={ setRating } rating={ rating } />
				</div>
			</div>
			<div className="flex items-center gap-5">
				<div className="w-1/6">Ulasan</div>
				<div className="w-5/6">
					<Textarea name="ulasan" required />
				</div>
			</div>
			<div className="flex items-center justify-end">
				<button className="bg-primary text-white rounded-md p-2">Kirim</button>
			</div>
		</form>
	)
}

function UpdateUlasan({ data }: { data: IBaseUlasan }) {
	const [rating, setRating] = useState<number>(data?.rating ?? 0)
	const ulasan = usePutUlasan()
	const deleteUlasan = useDeleteUlasanById()

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const c = formData.get("ulasan") as string;
		if (!c) return

		const body = { id: data.id, ulasan: c, rating, varianId: data.varian_id }

		ulasan.mutate(body, {
			onSuccess: () => toastSuccess("Ulasan berhasil diubah"),
			onError: () => toastError("Ulasan gagal diubah")
		})
	}

	const onDelete = () => {
		deleteUlasan.mutate({ id: data.id, varianId: data.varian_id }, {
			onSuccess: () => toastSuccess("Ulasan berhasil dihapus"),
			onError: () => toastError("Ulasan gagal dihapus")
		})
	}

	return (
		<form className="flex flex-col gap-5" onSubmit={ onSubmit }>
			<div className="flex items-center gap-5">
				<div className="w-1/6">Rating</div>
				<div className="w-5/6">
					<StarRatingWithAction setRating={ setRating } rating={ rating } />
				</div>
			</div>
			<div className="flex items-center gap-5">
				<div className="w-1/6">Ulasan</div>
				<div className="w-5/6">
					<Textarea defaultValue={ data?.konten ?? "" } name="ulasan" required />
				</div>
			</div>
			<div className="flex items-center justify-end gap-1">
				<button type="button" onClick={ onDelete } className="bg-red-600 text-white rounded-md p-2">
					<FaTrashCan />
				</button>
				<button type="submit" className="bg-primary text-white rounded-md p-2 text-xs">Kirim</button>
			</div>
		</form>
	)
}

export default function DialogUlasanForm({ varianId }: { varianId: number }) {
	const { data, isLoading } = useGetUlasanByVarian({ varianId })

	return match([data?.response, isLoading])
		.with([P.nullish, true], () => <Loader />)
		.with([P.nullish, false], () => <NewUlasan varianId={ varianId } />)
		.with([P.nonNullable, false], () => <UpdateUlasan data={ data.response } />)
		.otherwise(() => null)
}
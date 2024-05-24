import { useGetReplyUlasanByParentId } from "../../../adapters/hooks/useReplyUlasan";
import { useGetUlasanListByProdukId } from "../../../adapters/hooks/useUlasan";
import Icon from "../../../components/icon";

function UlasanReply({ ulasanId }: { ulasanId: number }) {
	const { data } = useGetReplyUlasanByParentId({ parent_id: ulasanId })

	return data?.response && (
		<>
			<hr className="my-5 border-black/20" />
			<h6 className="capitalize text-black font-semibold text-sm">Admin</h6>
			<p className="text-sm leading-tight opacity-75 mt-2 md:mt-1">{ data?.response?.konten }</p>
		</>
	)
}

export default function Ulasan({ productId }: { productId: number }) {
	const { data } = useGetUlasanListByProdukId(productId)

	return (
		<>
			{Array.isArray(data?.response?.data) && data.response.data.length > 0 && (
				<h2 className="text-sky-600 text-2xl font-semibold mb-8">
					Ulasan
				</h2>
			)}
			{ Array.isArray(data?.response?.data) && data.response.data.map((ulasan) => (
				<div key={ ulasan.id } className="rounded-md border-2 border-slate-200/75 p-4 flex gap-4 items-start mb-5">
					<img
						className="w-18 object-cover h-18 rounded-full"
						src={ `/api/uploaded/${ulasan?.user?.gambar?.nama}` }
					/>
					<div className="w-full pb-2">
						<h6 className="capitalize font-semibold text-sm text-black">{ ulasan?.user?.nama }</h6>
						<div className="flex text-yellow-300 gap-1 text-sm my-2">{ Array.from({ length: ulasan?.rating ?? 1 }).map((_, i) => (<Icon key={ i } nama={ "star" } />)) }</div>
						<p className="text-sm leading-tight opacity-75 mt-2 md:mt-1">{ ulasan?.konten }</p>
						{ ulasan.is_replied ? <UlasanReply ulasanId={ ulasan.id } /> : null }
					</div>
				</div>
			)) }
		</>
	)
}
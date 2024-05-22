import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useNavigate, useSearch } from "@tanstack/react-router"
import { useGetReplyUlasanList } from "../../adapters/hooks/useReplyUlasan"
import { replyUlasanRoute } from "../../routes/reply-ulasan-route"
import Pagination from "../../components/pagination"
import { match } from "ts-pattern"
import StarRating from "../../components/star-rating"
import Loader from "../../components/loader"
import { IoIosInformationCircleOutline } from "react-icons/io"
import { CiTrash } from "react-icons/ci"
import { AiOutlineMessage } from "react-icons/ai";
import ModalReply from "./modal-reply"

export default function ReplyUlasanListModule() {
	const navigate = useNavigate()
	const search = useSearch({ from: replyUlasanRoute.fullPath })
	const { data } = useGetReplyUlasanList({ page: search?.page })

	return (
		<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-5">
			<div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
				<h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">Daftar Produk</h4>
			</div>
			<Pagination withSearch={ false } navigate={ navigate } nextUrl={ data?.response?.next_page_url } />
			<div className="overflow-x-auto">
				<div className="align-middle">
					<table className="min-w-[100%]">
						<thead>
							<tr>
								<th className="p-4 whitespace-nowrap text-left">No.</th>
								<th className="p-4 whitespace-nowrap text-left">Pembeli</th>
								<th className="p-4 whitespace-nowrap text-left">Konten</th>
								<th className="p-4 whitespace-nowrap text-left">Rating</th>
								<th className="p-4 whitespace-nowrap text-left">Dibalas</th>
								<th className="p-4 whitespace-nowrap text-left">Action</th>
							</tr>
						</thead>
						<tbody>
							{ match([Boolean(data), Array.isArray(data?.response?.data)])
								.with([true, true], () => data?.response.data.map((c, key) => (
									<tr key={ c.id } className="align-top">
										<td className="py-3 px-4 whitespace-nowrap">{ key + 1 }</td>
										<td className="py-3 px-4 whitespace-nowrap">{ c.user?.nama }</td>
										<td className="py-3 px-4 whitespace-nowrap">{ c.konten }</td>
										<td className="py-3 px-4 whitespace-nowrap">
											<StarRating rating={c.rating} />
										</td>
										<td className="py-3 px-4 whitespace-nowrap">
											{match(Boolean(c.is_replied))
												.with(true, () => <IoIosCheckmarkCircle className="text-green-600" size={20} />)
												.with(false, () => <IoMdCloseCircle className="text-red-600" size={20} />)
												.exhaustive()}
										</td>
										<td className="py-3 px-4 whitespace-nowrap">
											<div className="flex items-start justify-start gap-3">
												<ModalReply ulasan={c} />
												<button className="hover:text-primary">
													<CiTrash size={ 20 } />
												</button>
											</div>
										</td>
									</tr>
								)))
								.otherwise(() => (
									<tr>
										<td colSpan={ 6 } className="text-center py-5">
											<Loader />
										</td>
									</tr>
								)) }
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
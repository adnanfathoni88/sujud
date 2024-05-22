import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useNavigate, useSearch } from "@tanstack/react-router"
import Pagination from "../../components/pagination"
import { match } from "ts-pattern"
import Loader from "../../components/loader"
import { useGetOngkirList } from "../../adapters/hooks/useOngkir";
import { ongkirRoute } from "../../routes/ongkir-route";

export default function OngkirListModule() {
	const navigate = useNavigate()
	const search = useSearch({ from: ongkirRoute.fullPath })
	const { data } = useGetOngkirList({ page: search?.page, isConfirmed: Boolean(Number(search?.isConfirmed)) })

	const onNavigate = () => {
		const urlSearchParam = new URLSearchParams()
		const isConfirmed = Number(search?.isConfirmed) ? 0 : 1
		urlSearchParam.append("isConfirmed", Boolean(isConfirmed).toString())
		if(search?.page) urlSearchParam.append("page", search?.page || "")
		navigate({ to: `?${urlSearchParam.toString()}` })	
	}

	return (
		<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-5">
			<div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
				<h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">Daftar Pesanan</h4>
			</div>
			<Pagination withSearch={ false } navigate={ navigate } nextUrl={ data?.response?.next_page_url } />
			<div className="overflow-x-auto">
				<div className="align-middle">
					<table className="min-w-[100%]">
						<thead>
							<tr>
								<th className="p-4 whitespace-nowrap text-left">No.</th>
								<th className="p-4 whitespace-nowrap text-left">Pembeli</th>
								<th className="p-4 whitespace-nowrap text-left">Invoice</th>
								<th className="p-4 whitespace-nowrap text-left">Ongkir</th>
								<th className="p-4 whitespace-nowrap text-left">Berat</th>
								<th className="p-4 whitespace-nowrap text-left">
									<button className="border px-2 py-1 rounded" onClick={onNavigate}>Dikonfirmasi</button>
								</th>
								<th className="p-4 whitespace-nowrap text-left">Action</th>
							</tr>
						</thead>
						<tbody>
							{ match([Boolean(data), Array.isArray(data?.response?.data)])
								.with([true, true], () => data?.response.data.map((c, key) => (
									<tr key={ c.id } className="align-top">
										<td className="py-3 px-4 whitespace-nowrap">{ key + 1 }</td>
										<td className="py-3 px-4 whitespace-nowrap">{ c.pelanggan?.nama }</td>
										<td className="py-3 px-4 whitespace-nowrap">{ c.pesanan_grup }</td>
										<td className="py-3 px-4 whitespace-nowrap">{c.ongkir}</td>
										<td className="py-3 px-4 whitespace-nowrap">{c.berat}</td>
										<td className="py-3 px-4 whitespace-nowrap">
											{match(Boolean(c.is_confirmed_by_admin))
												.with(true, () => <IoIosCheckmarkCircle className="text-green-600" size={20} />)
												.with(false, () => <IoMdCloseCircle className="text-red-600" size={20} />)
												.exhaustive()}
										</td>
										<td className="py-3 px-4 whitespace-nowrap">
											<div className="flex items-start justify-start gap-3">
												<Link to={`/admin/ongkir/${c.id}`} className="bg-first py-1 px-4 text-white rounded text-sm">
													Detail
												</Link>
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
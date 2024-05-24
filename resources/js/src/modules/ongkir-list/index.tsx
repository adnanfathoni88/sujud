import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useNavigate, useSearch } from "@tanstack/react-router"
import Pagination from "../../components/pagination"
import { P, match } from "ts-pattern"
import Loader from "../../components/loader"
import { useGetOngkirList } from "../../adapters/hooks/useOngkir";
import { ongkirRoute } from "../../routes/ongkir-route";
import FilterOngkir from "./filter-ongkir";
import { useEffect } from "react";
import SetResi from "./set-resi";

export default function OngkirListModule() {
	const navigate = useNavigate()
	const search = useSearch({ from: ongkirRoute.fullPath })
	const { data } = useGetOngkirList({ page: search?.page, status: search?.status ?? 'masuk' })

	useEffect(() => { navigate({ to: `/admin/ongkir?page=1&status=all` }) }, [])


	return (
		<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-5">
			<div className="flex items-center justify-between mb-10 flex-col sm:flex-row">
				<h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">Daftar Pesanan</h4>
				<FilterOngkir />
			</div>
			<div className="overflow-x-auto">
				<div className="align-middle">
					<table className="min-w-[100%]">
						<thead>
							<tr>
								<th className="p-4 whitespace-nowrap text-left">No.</th>
								<th className="p-4 whitespace-nowrap text-left">Pembeli</th>
								<th className="p-4 whitespace-nowrap text-left">Invoice</th>
								<th className="p-4 whitespace-nowrap text-left">Resi</th>
								<th className="p-4 whitespace-nowrap text-left">Ongkir</th>
								<th className="p-4 whitespace-nowrap text-left">Berat</th>
								<th className="p-4 whitespace-nowrap text-left">Status</th>
								<th className="p-4 whitespace-nowrap text-left">Action</th>
							</tr>
						</thead>
						<tbody>
							{ match([Boolean(data), Array.isArray(data?.response?.data)])
								.with([true, true], () => data?.response.data.map((c, key) => (
									<tr key={ c.id } className="align-top">
										<td className="py-3 px-4 text-left whitespace-nowrap">{ key + 1 }</td>
										<td className="py-3 px-4 text-left whitespace-nowrap">{ c.pelanggan?.nama }</td>
										<td className="py-3 px-4 text-left whitespace-nowrap">{ c.pesanan_grup }</td>
										<td className="py-3 px-4 text-left whitespace-nowrap">{ c?.resi ?? "-" }</td>
										<td className="py-3 px-4 text-left whitespace-nowrap">{ c.ongkir }</td>
										<td className="py-3 px-4 text-left whitespace-nowrap">{ c.berat }</td>
										<td className="py-3 px-4 text-left whitespace-nowrap">
											{ match([c.resi, c.telah_sampai, c.is_confirmed_by_admin, c?.pesanan_single?.status])
												.with([null, 0, 1, 'failed'], () => <p className="font-semibold text-sm text-red-500">Gagal</p>)
												.with([P.string, 1, 1, 'dibayar'], () => <p className="font-semibold text-sm text-green-500">Sampai</p>)
												.with([null, 0, 1, 'dibayar'], () => <p className="font-semibold text-sm text-green-500">Dibayar</p>)
												.with([null, 0, 0, 'belum-bayar'], () => <p className="font-semibold text-sm text-blue-500">Pesanan masuk</p>)
												.with([P.string, 0, 1, 'dibayar'], () => <p className="font-semibold text-sm text-green-500">Pengiriman</p>)
												.with([null, 0, 1, 'belum-bayar'], () => <p className="font-semibold text-sm text-orange-500">Belum bayar</p>)
												.otherwise(() => null) }
										</td>
										<td className="py-3 px-4 text-left whitespace-nowrap">
											<div className="flex items-start justify-start gap-2">
												{ match([c.resi, c.telah_sampai, c.is_confirmed_by_admin, c?.pesanan_single?.status])
													.with([null, 0, 1, 'dibayar'], () => <SetResi ongkirId={c.id} />)
													.otherwise(() => null) }
												<Link to={ `/admin/ongkir/${c.id}` } className="bg-first py-1 px-4 text-white rounded text-sm">
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
			<div className="mt-10">
				<Pagination withSearch={ false } navigate={ navigate } nextUrl={ data?.response?.next_page_url } />
			</div>
		</div>
	)
}
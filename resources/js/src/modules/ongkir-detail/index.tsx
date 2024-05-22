import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useNavigate, useParams, useSearch } from "@tanstack/react-router"
import Pagination from "../../components/pagination"
import { match } from "ts-pattern"
import Loader from "../../components/loader"
import { useGetOngkirDetail, useGetOngkirList } from "../../adapters/hooks/useOngkir";
import KonfirmasiPesanan from "./konfirmasi-pesanan";

export default function OngkirListModule() {
	const navigate = useNavigate()
	const { ongkirId } = useParams({ strict: false })
	const { data } = useGetOngkirDetail({ id: Number(ongkirId) })

	return (
		<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-5">
			<div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
				<h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0 capitalize">Daftar Pesanan { data?.response?.pelanggan?.nama }</h4>
			</div>
			<div className="mt-6">
				<dl className="">
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Alamat Pembeli
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							{ data?.response?.pelanggan?.alamat ?? "-" }
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							No. Whatsapp
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							{ data?.response?.pelanggan?.nomor }
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Alamat Email
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							{ data?.response?.pelanggan?.email }
						</dd>
					</div>
					<hr className="my-3" />
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Invoice
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							{ data?.response?.pesanan_grup }
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Ongkir
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							{ data?.response?.ongkir ?? "-" }
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Berat Barang
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							{ data?.response?.berat ?? "-" }
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							Ekspedisi
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
							{ data?.response?.ekspedisi ?? "-" }
						</dd>
					</div>
				</dl>
			</div>
			<div className="overflow-x-auto mt-6">
				<div className="align-middle">
					<table className="min-w-[100%]">
						<thead>
							<tr>
								<th className="border bg-zinc-200 dark:bg-black/50 p-4 whitespace-nowrap text-left">No.</th>
								<th className="border bg-zinc-200 dark:bg-black/50 p-4 whitespace-nowrap text-left">Produk</th>
								<th className="border bg-zinc-200 dark:bg-black/50 p-4 whitespace-nowrap text-left">Ukuran</th>
								<th className="border bg-zinc-200 dark:bg-black/50 p-4 whitespace-nowrap text-left">Warna</th>
								<th className="border bg-zinc-200 dark:bg-black/50 p-4 whitespace-nowrap text-left">QTY</th>
								<th className="border bg-zinc-200 dark:bg-black/50 p-4 whitespace-nowrap text-left">Harga Total</th>
								<th className="border bg-zinc-200 dark:bg-black/50 p-4 whitespace-nowrap text-left">Harga Potongan</th>
							</tr>
						</thead>
						<tbody>
							{ Array.isArray(data?.response?.pesanan) && data?.response?.pesanan.map((c, key) => (
								<tr key={ c.id } className="align-top">
									<td className="border py-3 px-4 whitespace-nowrap">{ key + 1 }</td>
									<td className="border py-3 px-4 whitespace-nowrap">{ c?.varian?.produk?.nama }</td>
									<td className="border py-3 px-4 whitespace-nowrap">{ c?.varian?.ukuran }</td>
									<td className="border py-3 px-4 whitespace-nowrap">{ c?.varian?.warna }</td>
									<td className="border py-3 px-4 whitespace-nowrap">{ c?.qty }</td>
									<td className="border py-3 px-4 whitespace-nowrap">Rp. { c?.total?.toLocaleString() }</td>
									<td className="border py-3 px-4 whitespace-nowrap">Rp. { c?.diskon?.toLocaleString() }</td>
								</tr>
							)) }
							{ Array.isArray(data?.response?.pesanan) && (
								<tr>
									<td colSpan={ 5 } className="border py-3 px-4 whitespace-nowrap">Total</td>
									<td colSpan={ 2 } className="border py-3 px-4 whitespace-nowrap">Rp. { data?.response?.pesanan.reduce((acc, curr) => {
										return acc + (curr.total - curr.diskon)
									}, 0).toLocaleString() }</td>
								</tr>
							) }
						</tbody>
					</table>
				</div>
			</div>
			{ Boolean(data?.response) && (
				<KonfirmasiPesanan 
					berat={ data.response.berat }
					ongkirId={ data.response.id }
					ongkir={ data.response.ongkir }
					ekspedisi={ data.response.ekspedisi }
				/>
			) }
		</div>
	)
}
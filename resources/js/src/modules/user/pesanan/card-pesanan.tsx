import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidDollarCircle } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { PiWarningCircleFill } from "react-icons/pi";
import { P, match } from "ts-pattern";
import ModalMetodeBayar from "./modal-metode-bayar";
import { twMerge } from "tailwind-merge";
import GiveRating from "./give-rating";
import { IOngkir } from "../../../interfaces/ongkir";
import { useSetPesananTelahSampai } from "../../../adapters/hooks/usePesanan";
import { useSearch } from "@tanstack/react-router";
import { toastError, toastSuccess } from "../../../utils/toast";
import { useState } from "react";

export default function CardPesanan({ data }: { data: IOngkir }) {
	const search = useSearch({ strict: false })
	const changeStatus = useSetPesananTelahSampai()
	const [show, setShow] = useState(false)

	const handleSetTelahSampai = () => {
		if (changeStatus.isPending) return

		const toSave = {
			id: data.id,
			page: search?.page,
			status: search?.status,
			isArrived: search?.isArrived,
			isConfirmed: search?.isConfirmed,
		}

		changeStatus.mutate(toSave, {
			onSuccess: () => toastSuccess('Berhasil mengubah pesanan'),
			onError: (e: any) => toastError(e?.response?.data?.message ?? 'Gagal mengubah pesanan')
		})
	}

	return (
		<div key={ data.id } className="rounded-md overflow-hidden border border-black/10 shadow-xs">
			{ match([data.is_confirmed_by_admin, data.resi, data.telah_sampai, data.pesanan?.[0].status])
				.with([0, null, 0, P.string], () => (
					<div className="w-full p-5 bg-red-400 text-white flex items-center gap-5">
						<PiWarningCircleFill size={ 20 } />
						<span>Menunggu konfirmasi admin</span>
					</div>
				))
				.with([1, null, 0, 'belum-bayar'], () => (
					<div className="w-full p-5 bg-orange-400 text-white flex items-center gap-5">
						<BiSolidDollarCircle size={ 20 } />
						<span>Menunggu pembayaran</span>
					</div>
				))
				.with([1, null, 0, 'failed'], () => (
					<div className="w-full p-5 bg-red-400 text-white flex items-center gap-5">
						<BiSolidDollarCircle size={ 20 } />
						<span>Pembayaran gagal.</span>
					</div>
				))
				.with([1, P.string, 0, 'dibayar'], () => (
					<div className="w-full p-5 bg-green-400 text-white flex items-center gap-5">
						<AiFillInfoCircle size={ 20 } />
						<span>Telah dibayar, pesananmu dalam perjalanan</span>
					</div>
				))
				.with([1, P.string, 1, 'dibayar'], () => (
					<div className="w-full p-5 bg-blue-400 text-white flex items-center gap-5">
						<GoHomeFill size={ 20 } />
						<span>Pesanan telah sampai, terimakasih telah berbelanja.</span>
					</div>
				))
				.otherwise(() => null) }
			<div className="p-5">
				<div className="flex justify-between items-start flex-col sm:flex-row">
					<div className="flex flex-col">
						<h1 className="text-black font-semibold">Belanja</h1>
						<p className="text-black text-sm mt-1">Thus, 21 May 2022</p>
					</div>
					<div className="flex gap-2">
						<button
							onClick={ () => setShow(v => !v) }
							className={twMerge(show ? "bg-orange-500" : "bg-sky-500", "text-xs text-white px-4 py-2 rounded-md h-fit mt-2 ml-auto sm:ml-0 sm:mt-0")}
						>
							{show ? "Close" : "Detail"}
						</button>
						{ match([data?.resi, data.is_confirmed_by_admin, data.pesanan?.[0].status, data.telah_sampai])
							.with([null, 1, 'belum-bayar', 0], () => <ModalMetodeBayar pesananGrup={ data.pesanan_grup } />)
							.with([null, 1, 'dibayar', 0], () => (
								<a
									href={ `/payment-status?pesanan_grup=${data.pesanan_grup}` }
									className="text-xs bg-sky-500 text-white px-3 py-2 rounded-md shadow-md text-sm hover:shadow-none transition-all"
								>
									Status Pembayaran
								</a>
							))
							.with([P.string, 1, 'dibayar', 0], () => (
								<button
									onClick={ handleSetTelahSampai }
									disabled={ changeStatus.isPending }
									className="text-xs bg-sky-500 text-white px-3 py-2 rounded-md shadow-md text-sm hover:shadow-none transition-all disabled:bg-sky-300 disabled:cursor-not-allowed"
								>
									Pesanan telah sampai
								</button>
							))
							.otherwise(() => null) }
					</div>
				</div>
				{ show && (
					<div className="overflow-x-auto mt-5">
						<div className="align-middle">
							<table>
								<tbody>
									<tr>
										<td className="pt-3">
											<p className="text-black">Invoice</p>
										</td>
										<td className="pt-3 pl-5">
											<p className="text-black">{ data.pesanan_grup }</p>
										</td>
									</tr>
									<tr>
										<td className="pt-3">
											<p className="text-black">Ekspedisi</p>
										</td>
										<td className="pt-3 pl-5">
											<p className="text-black">{ data.ekspedisi }</p>
										</td>
									</tr>
									<tr>
										<td className="pt-3">
											<p className="text-black">Resi</p>
										</td>
										<td className="pt-3 pl-5">
											<p className="text-black">{ data.resi }</p>
										</td>
									</tr>
									<tr>
										<td className="pt-3">
											<p className="text-black">Ongkir</p>
										</td>
										<td className="pt-3 pl-5">
											<p className="text-black">{ `Rp. ${data.ongkir.toLocaleString()}` }</p>
										</td>
									</tr>
									<tr>
										<td className="pt-8">
											<p className="text-black font-black">TOTAL</p>
										</td>
										<td className="pt-8 pl-5">
											<p className="text-black font-black">{ Array.isArray(data?.pesanan)
												? `Rp. ${((data?.ongkir ?? 0) + data.pesanan.reduce((a, c) => (a += c.total), 0)).toLocaleString()}`
												: "-"
											}</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				) }
			</div>
			<div className="p-5">
				<div className="overflow-x-auto">
					<div>
						<table className="w-full">
							<thead>
								<tr className="bg-zinc-100">
									<th className="p-4 whitespace-nowrap text-left">Produk</th>
									<th className="p-4 whitespace-nowrap text-left">Kuantitas</th>
									<th className="p-4 whitespace-nowrap text-left">Diskon</th>
									<th className="p-4 whitespace-nowrap text-left">Total</th>
									<th className="p-4 whitespace-nowrap text-left">Status</th>
									{ match([data?.resi, data.is_confirmed_by_admin, data.pesanan?.[0].status, data.telah_sampai])
										.with([P.string, 1, 'dibayar', 1], () => <th className="p-4 whitespace-nowrap text-left">Ulasan</th>)
										.otherwise(() => null) }
								</tr>
							</thead>
							<tbody>
								{ Array.isArray(data?.pesanan) && data.pesanan.map(p => (
									<tr key={ p.id } className="align-top">
										<td className="p-4 whitespace-nowrap text-left">
											<div className="flex gap-3 items-start">
												{ p?.varian?.gambar?.nama && <img src={ `/api/uploaded/${p?.varian?.gambar?.nama}` } className="max-w-[100px]" /> }
												<div className="flex flex-col gap-1">
													<p className="capitalize font-semibold text-sm text-black">{ p?.varian?.produk?.nama }</p>
													<p className="text-xs text-zinc-400">{ p?.varian?.warna }, { p?.varian?.ukuran }</p>
												</div>
											</div>
										</td>
										<td className="p-4 whitespace-nowrap text-left">
											<p className="text-black">{ p.qty }</p>
										</td>
										<td className="p-4 whitespace-nowrap text-left">
											<p className="text-black">{ !p?.diskon ? '-' : `Rp. ${p.diskon.toLocaleString()}` }</p>
										</td>
										<td className="p-4 whitespace-nowrap text-left">
											<p className="text-black">{ !p?.total ? '-' : `Rp. ${p.total.toLocaleString()}` }</p>
										</td>
										<td className="p-4 whitespace-nowrap text-left">
											<p
												className={ twMerge(
													"text-sm font-semibold",
													match(p.status)
														.with('belum-bayar', () => 'text-orange-500')
														.with('dibayar', () => 'text-green-500')
														.otherwise(() => 'text-red-500')
												) }
											>
												{ p.status }
											</p>
										</td>
										{ match([data?.resi, data.is_confirmed_by_admin, p.status, data.telah_sampai])
											.with([P.string, 1, 'dibayar', 1], () => (
												<td className="p-4 whitespace-nowrap text-left">
													<GiveRating varianId={ p?.varian?.id } />
												</td>
											))
											.otherwise(() => null) }
									</tr>
								)) }
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
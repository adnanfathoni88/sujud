import { useNavigate, useSearch } from "@tanstack/react-router";
import Loader from "../../components/loader";
import { twMerge } from "tailwind-merge";
import { match } from "ts-pattern";
import { productRoute } from "../../routes/product-route";
// @ts-ignore
import Pagination from "../../components/pagination";
import { useGetTransaksiList } from "../../adapters/hooks/useTransaksi";
import ModalCheckTransaction from "./modal-check-transaction";

const TransaksiListModule: React.FC = () => {
	const search = useSearch({ strict: false })
	const navigate = useNavigate({ from: productRoute.fullPath })
	const { data, isError } = useGetTransaksiList({ status: search?.status ?? "SUCCESS", q: search?.q, page: search?.page});
	
	const handleChangeStatus = () => {
		const urlSearchParam = new URLSearchParams(search)
		urlSearchParam.set("status", search?.status === "FAILED" ? "SUCCESS" : "FAILED")
		navigate({ to: `?${urlSearchParam.toString()}` })
	}

	return (
		<>
			<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				<div className="flex items-start justify-between mb-10 flex-col sm:flex-row">
					<h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">Daftar Transaksi</h4>
					<ModalCheckTransaction />
				</div>
				{/* search bar */}
				<Pagination searchPlaceholder="INVOICE" withSearch={true} navigate={navigate} nextUrl={ data?.response?.next_page_url } />
				<div className="overflow-x-auto pb-5">
					<div className="align-middle">
						<table className="min-w-[100%]">
							<thead>
								<tr>
									<th className="p-4 whitespace-nowrap text-left">No.</th>
									<th className="p-4 whitespace-nowrap text-left">Tanggal Pembayaran</th>
									<th className="p-4 whitespace-nowrap text-left">Invoice</th>
									<th className="p-4 whitespace-nowrap text-left">Metode</th>
									<th className="p-4 whitespace-nowrap text-left">
										<button className="border px-3 py-1 rounded" onClick={handleChangeStatus}>
											Status
										</button>
									</th>
									<th className="p-4 whitespace-nowrap text-left">Total</th>
									<th className="p-4 whitespace-nowrap text-left">Referensi</th>
									<th className="p-4 whitespace-nowrap text-left">Publisher</th>
									<th className="p-4 whitespace-nowrap text-left">Signature</th>
								</tr>
							</thead>
							<tbody>
								{ match([Boolean(data), Array.isArray(data?.response?.data)])
									.with([true, true], () => data?.response.data.map((c, key) => (
										<tr key={ c.id } className="align-top">
											<td className="py-3 px-4 whitespace-nowrap">{ key + 1 }</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.tgl_bayar }</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.pesanan_grup }</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.metode }</td>
											<td className={twMerge("py-3 px-4 whitespace-nowrap font-semibold", c.status === "SUCCESS" ? "text-green-600" : "text-red-600")}>{ c.status }</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.total }</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.reference }</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.publisher_order_id }</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.signature }</td>
										</tr>
									)))
									.otherwise(() => (
										<tr>
											<td colSpan={ 9 } className="text-center py-5">
												<Loader />
											</td>
										</tr>
									)) }
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default TransaksiListModule;

import { useNavigate, useSearch } from "@tanstack/react-router";
import { useGetPesanan } from "../../../adapters/hooks/usePesanan";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import { useEffect, useMemo } from "react";
import { match } from "ts-pattern";
import { FilterPesanan } from "./filter-pesanan";
import { pesananRoute } from "../../../routes/user";
import Loader from "../../../components/loader";
import TablePesanan from "./table-pesanan";

const PesananModule: React.FC = () => {
	const navigate = useNavigate({ from: pesananRoute.fullPath })
	const search = useSearch({ strict: false })
	const status = useMemo<any>(() => {
		return search?.isisArrived === true ? "dibayar" : match(search?.status)
			.with('failed', () => 'failed')
			.with('dibayar', () => 'dibayar')
			.otherwise(() => 'belum-bayar')
	}, [search?.status])
	
	useEffect(() => { navigate({ to: '/pesanan?page=1&status=belum-bayar&isConfirmed=true' }) }, [])

	const { data } = useGetPesanan({ 
		status,
		page: search?.page ?? 1, 
		isArrived: search?.isArrived,
		isConfirmed: search?.isConfirmed === true ? true : Boolean(search?.isConfirmed === 'true')
	})

	return (
		<div className="bg-white">
			<Navbar />
			<div className="pt-[100px] md:px-10 lg:px-20 pb-16 min-h-[90vh] max-w-[1000px] mx-auto">
				<div className="flex items-center justify-between">
					<h2 className="font-semibold text-3xl md:py-4 md:mb-4">
						Daftar pesananmu
					</h2>
					<FilterPesanan />
				</div>
				{ Array.isArray(data?.response?.data) ? <TablePesanan nextUrl={data?.response?.next_page_url} data={data?.response?.data} /> : <Loader />}
			</div>
			<Footer />
		</div>
	);
};

export default PesananModule;

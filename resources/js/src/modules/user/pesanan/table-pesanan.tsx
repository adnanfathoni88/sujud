import { useNavigate, useSearch } from "@tanstack/react-router";
import Pagination from "../../../components/pagination";
import { pesananRoute } from "../../../routes/user";
import { match } from "ts-pattern";
import { IOngkirListWithPesanan } from "../../../interfaces/ongkir";
import CardPesanan from "./card-pesanan";

export default function TablePesanan({ data, nextUrl }: { nextUrl?: string, data: IOngkirListWithPesanan }) {
	const navigate = useNavigate({ from: pesananRoute.fullPath })
	const search = useSearch({ strict: false })

	return (
		<>
			<div className="mt-10 flex flex-col gap-10">
				{ data.map(v => <CardPesanan data={v} />) }
			</div>
			<div className="mt-10">
				{ match(data.length < 1 && search?.page == 1)
					.with(true, () => (
						<>
							<h1 className="text-center">Kamu tidak mempunyai pesanan</h1>
							<div className="flex justify-center mt-5">
								<button
									className="bg-sky-500 text-white px-4 py-2 rounded-md"
									onClick={ () => navigate({ to: '/shop' }) }
								>
									Belanja Sekarang
								</button>
							</div>
						</>
					))
					.otherwise(() => <Pagination navigate={ navigate } nextUrl={ nextUrl } />) }
			</div>
		</>
	)
}

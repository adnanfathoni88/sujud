import { Link } from "@tanstack/react-router";
import { useGetProductList } from "../../../adapters/hooks/useProducts";

export default function ProductLanding() {
	const { data } = useGetProductList({ q: undefined, page: undefined });

	return (
		<div className="py-10 md:px-20 bg-white px-10">
			<div className="flex justify-between text-center">
				<h2 className="text-sky-600 text-2xl font-semibold md:text-3xl">
					Koleksi Produk
				</h2>
				<button className="bg-custom-yellow hover:bg-yellow-400 text-white px-6 rounded-md">
					Lihat
				</button>
			</div>
			<div className="py-4 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-10">
				{ Array.isArray(data?.response.data) && data?.response.data.map(p => (
					<div className="bg-white mb-4 w-full rounded-lg relative" key={p.id}>
						<div className="h-56 mb-2 md:h-64">
							<img
								className="h-full object-cover w-full object-top-0 rounded-md"
								src={`/api/uploaded/${p.varian.gambar.nama}`}
								alt=""
							/>
						</div>
						<h3 className="text-black capitalize mt-5 text-sm px-1">{p.nama}</h3>
						<p className="text-black text-md mt-1 px-1 font-semibold">Rp {p.varian.harga.toLocaleString()}</p>
						<Link to={`/detail/${p.id}/shop`} className="absolute inset-0" />
					</div>
				)) }
			</div>
		</div>
	)
}
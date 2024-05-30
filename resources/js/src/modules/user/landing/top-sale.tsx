import { match } from "ts-pattern";
import { useGetProductTopSale } from "../../../adapters/hooks/useProducts";
import Loader from "../../../components/loader";
import { Link } from "@tanstack/react-router";

export default function TopSale() {
	const { data, isLoading } = useGetProductTopSale();

	return (
		<div className="bg-white w-[90%] lg:w-[80%] p-4 rounded-xl h-fit shadow-md lg:py-8">
			<h2 className="font-bold text-center text-sky-600 text-2xl mb-6 lg:text-4xl">
				Top Sale
			</h2>
			<div className="flex flex-col sm:flex-row gap-2 px-2 md:gap-4 lg:px-10 lg:gap-5 justify-center">
				{ match([isLoading, Array.isArray(data?.response)])
					.with([false, true], () => data?.response.map((product) => (
						<Link to={`/detail/${product.id}/shop`} key={ product.id } className="shadow-sm border-2 border-slate-100 w-full sm:w-34 gap-4 flex-auto rounded-sm p-4 flex justify-center mb-4 py-4">
							<div>
								<img
									className="h-24 md:h-36"
									src={ `/api/uploaded/${product.varian?.gambar?.nama}` }
									alt=""
								/>
							</div>
							<div className="text-start flex flex-col justify-center">
								<h5 className="text-custom-yellow md:text-xl">
									{ product?.kategori?.nama }
								</h5>
								<h2 className="text-sky-600 text-xl font-semibold md:text-3xl">
									{ product?.nama }
								</h2>
							</div>
						</Link>
					)))
					.otherwise(() => <Loader />) }
			</div>
		</div>
	)
}
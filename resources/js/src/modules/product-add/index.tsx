import { useGetCategoryList } from "../../adapters/hooks/useCategory";
import NewCategory from "../category-list/new-category";
import FormAddProduct from "./form";

export default function ProductAddModule() {
	const { data } = useGetCategoryList()

	return (
		<>
			<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				<div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
					<h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">Buat Produk</h4>
					<NewCategory />
				</div>
				{ Array.isArray(data?.response) && <FormAddProduct category={ data?.response } /> }
			</div>
		</>
	);
}

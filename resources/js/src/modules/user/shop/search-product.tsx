import { useNavigate, useSearch } from "@tanstack/react-router";
import { shopRoute } from "../../../routes/user";
import { IProductList } from "../../../interfaces/product";

let timer: any;

export default function SearchProduct({ setProduct }: { setProduct: React.Dispatch<React.SetStateAction<IProductList>> }) {
	const search = useSearch({ strict: false })
	const navigate = useNavigate({ from: shopRoute.fullPath })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			const searchParam = new URLSearchParams()
			searchParam.set('q', e.target.value)
			searchParam.set('page', '1')
			if (search?.kategori_id) searchParam.set('kategori_id', search.kategori_id)
			setProduct([])
			navigate({ to: `/shop?${searchParam.toString()}` })
		}, 1000)
	}

	return (
		<input
			type="text"
			onChange={ handleChange }
			defaultValue={ search?.q ?? "" }
			placeholder="Search..."
			className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm w-60 md:w-80 lg:w-96 h-full"
		/>
	)
}
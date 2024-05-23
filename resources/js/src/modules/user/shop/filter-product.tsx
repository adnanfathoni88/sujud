import { FaCheck } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { IProductList } from "../../../interfaces/product";
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { useGetCategoryList } from "../../../adapters/hooks/useCategory";
import { ICategoryList } from "../../../interfaces/category";
import { useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { shopRoute } from "../../../routes/user";


function FilterDropdown({ categories, setProduct }: { setProduct: React.Dispatch<React.SetStateAction<IProductList>>, categories: ICategoryList }) {
	const search = useSearch({ strict: false })
	const navigate = useNavigate({ from: shopRoute.fullPath })
	const [selected, setSelected] = useState<number | null>(isNaN(search?.kategori_id) ? null : Number(search?.kategori_id));

	const handleSelect = (id: number) => () => {
		const searchParam = new URLSearchParams()
		if (selected == id) {
			searchParam.delete('kategori_id')
			setSelected(null);
		} else {
			searchParam.set('kategori_id', id.toString())
			setSelected(id);
		}
		searchParam.set('page', '1')
		if (search?.q) searchParam.set('q', search.q)
		setProduct([])
		navigate({ to: `/shop?${searchParam.toString()}` })
	}


	return (
		<Menu>
			<MenuButton className="bg-sky-500 text-white px-4 py-2 rounded-md ml-2 border-0 flex items-center gap-2">
				<FaFilter size={ 16 } />
				Kategori
			</MenuButton>
			<Transition
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<MenuItems
					anchor="bottom end"
					className="mt-3 shadow divide-y divide-white/5 rounded-xl bg-white text-sm/6 [--anchor-gap:var(--spacing-5)] border border-black/10"
				>
					<div className="p-3 w-[200px] flex-col flex gap-2">
						{ categories.map(c => (
							<MenuItem key={ c.id }>
								<button onClick={ handleSelect(c.id) } className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", c.id == selected && "bg-black/5") }>
									{ c.id == selected && <FaCheck size={ 16 } className="mr-2" /> }
									<p className="font-semibold text-black/90 m-0">{ c.nama }</p>
								</button>
							</MenuItem>
						)) }
					</div>
				</MenuItems>
			</Transition>
		</Menu>
	)
}


export default function FilterProduct({ setProduct }: { setProduct: React.Dispatch<React.SetStateAction<IProductList>> }) {
	const { data } = useGetCategoryList();

	return Array.isArray(data?.response) && <FilterDropdown setProduct={ setProduct } categories={ data.response } />
}
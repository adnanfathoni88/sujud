import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { FaCheck, FaFilter } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { ongkirRoute } from "../../routes/ongkir-route";

export default function FilterOngkir() {
	const search = useSearch({ strict: false })
	const navigate = useNavigate({ from: ongkirRoute.fullPath })

	const handleStatus = (status: string) => () => {
		const searchParam = new URLSearchParams()
		searchParam.set('status', status)
		if (search?.page) searchParam.set('page', search.page.toString())
		navigate({ to: `/admin/ongkir?${searchParam.toString()}` })
	}

	return (
		<Menu>
			<MenuButton className="bg-sky-500 text-white px-4 py-2 text-sm rounded-md ml-2 border-0 flex items-center gap-2">
				<FaFilter size={ 16 } />
				Status
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
						<MenuItem>
							<button onClick={handleStatus('all')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'all' && "bg-black/5") }>
								{search?.status === 'all' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Semua</p>
							</button>
						</MenuItem>
						<MenuItem>
							<button onClick={handleStatus('masuk')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'masuk' && "bg-black/5") }>
								{search?.status === 'masuk' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Pesanan masuk</p>
							</button>
						</MenuItem>
						<MenuItem>
							<button onClick={handleStatus('belum-bayar')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'belum-bayar' && "bg-black/5") }>
								{search?.status === 'belum-bayar' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Belum bayar</p>
							</button>
						</MenuItem>
						<MenuItem>
							<button onClick={handleStatus('dibayar')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'dibayar' && "bg-black/5") }>
								{search?.status === 'dibayar' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Dibayar</p>
							</button>
						</MenuItem>
						<MenuItem>
							<button onClick={handleStatus('pengiriman')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'pengiriman' && "bg-black/5") }>
								{search?.status === 'pengiriman' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Pengiriman</p>
							</button>
						</MenuItem>
						<MenuItem>
							<button onClick={handleStatus('gagal')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'gagal' && "bg-black/5") }>
								{search?.status === 'gagal' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Gagal</p>
							</button>
						</MenuItem>
						<MenuItem>
							<button onClick={handleStatus('sampai')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'sampai' && "bg-black/5") }>
								{search?.status === 'sampai' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Sampai</p>
							</button>
						</MenuItem>
					</div>
				</MenuItems>
			</Transition>
		</Menu>
	)
}
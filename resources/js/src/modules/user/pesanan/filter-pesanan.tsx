import { FaCheck } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { shopRoute } from "../../../routes/user";
import { match } from "ts-pattern";

export function FilterPesanan() {
	const search = useSearch({ strict: false })
	const navigate = useNavigate({ from: shopRoute.fullPath })


	const handleStatus = (status: string) => () => {
		const searchParam = new URLSearchParams()
		searchParam.set('status', status)
		if (search?.page) searchParam.set('page', search.page.toString())
		if (search?.isConfirmed) searchParam.set('isConfirmed', `${Boolean(search.isConfirmed === true)}`)

		navigate({ to: `/pesanan?${searchParam.toString()}` })
	}

	const handleConfirm = () => {
		const status = match(search?.status)
			.with('failed', () => 'failed')
			.with('dibayar', () => 'dibayar')
			.otherwise(() => 'belum-bayar')

		const searchParam = new URLSearchParams()
		if (search?.status) searchParam.set('status', status)
		if (search?.page) searchParam.set('page', search.page.toString())
		searchParam.set('isConfirmed', `${!Boolean(search?.isConfirmed === true)}`)

		navigate({ to: `/pesanan?${searchParam.toString()}` })
	}

	const handleArrived = () => {
		const searchParam = new URLSearchParams()
		
		searchParam.set('status', "dibayar")
		searchParam.set('isConfirmed', `${true}`)
		searchParam.set('isArrived', `${!Boolean(search?.isArrived === true)}`)
		if (search?.page) searchParam.set('page', search.page.toString())

		navigate({ to: `/pesanan?${searchParam.toString()}` })
	}
	
	return (
		<Menu>
			<MenuButton className="bg-sky-500 text-white px-4 py-2 rounded-md ml-2 border-0 flex items-center gap-2">
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
							<button onClick={handleStatus('dibayar')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'dibayar' && "bg-black/5") }>
								{search?.status === 'dibayar' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Dibayar</p>
							</button>
						</MenuItem>
						<MenuItem>
							<button onClick={handleStatus('failed')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'failed' && "bg-black/5") }>
								{search?.status === 'failed' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Gagal</p>
							</button>
						</MenuItem>
						<MenuItem>
							<button onClick={handleStatus('belum-bayar')} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search?.status === 'belum-bayar' && "bg-black/5") }>
								{search?.status === 'belum-bayar' && <FaCheck size={ 16 } className="mr-2" />}
								<p className="font-semibold text-black/90 m-0">Belum dibayar</p>
							</button>
						</MenuItem>
					</div>
					<div className="bg-black/10 h-[1px] w-full"></div>
					<div className="p-3 w-[200px] flex-col flex gap-2">
						<MenuItem>
							<button onClick={handleConfirm} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search.isConfirmed && "bg-black/5") }>
								{ search.isConfirmed && <FaCheck size={ 16 } className="mr-2" /> }
								<p className="font-semibold text-black/90 m-0">Dikonfirmasi admin</p>
							</button>
						</MenuItem>
					</div>
					<div className="bg-black/10 h-[1px] w-full"></div>
					<div className="p-3 w-[200px] flex-col flex gap-2">
						<MenuItem>
							<button onClick={handleArrived} className={ twMerge("block rounded-lg py-2 px-3 transition hover:bg-black/5 flex items-center w-full", search.isArrived && "bg-black/5") }>
								{ search.isArrived && <FaCheck size={ 16 } className="mr-2" /> }
								<p className="font-semibold text-black/90 m-0">Telah sampai</p>
							</button>
						</MenuItem>
					</div>
				</MenuItems>
			</Transition>
		</Menu>
	)
}
import { match } from "ts-pattern";
import { useProfileStore } from "../store/useProfile";
import Icon from "./icon";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "@tanstack/react-router";

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
// import {
// 	ArchiveBoxXMarkIcon,
// 	ChevronDownIcon,
// 	PencilIcon,
// 	Square2StackIcon,
// 	TrashIcon,
// } from '@heroicons/react/16/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { handleLogout } from "../services/auth";

function ProfileDropdown({ profileImage }: { profileImage: string }) {
	return (
		<Popover>
			<PopoverButton className="block font-semibold rounded-full border-2 border-white focus:outline-none">
				<img
					src={ profileImage }
					className="w-9 h-9 rounded-full"
				/>
			</PopoverButton>
			<Transition
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<PopoverPanel
					anchor="bottom end"
					className="mt-3 shadow divide-y divide-white/5 rounded-xl bg-white text-sm/6 [--anchor-gap:var(--spacing-5)]"
				>
					<div className="p-3">
						<Link to="/profile" className="block rounded-lg py-2 px-3 transition hover:bg-black/5" href="#">
							<p className="font-semibold text-black/90">Profile</p>
							<p className="text-black/50">Atur profil kamu di sini.</p>
						</Link>
						<a className="block rounded-lg py-2 px-3 transition hover:bg-black/5" href="#">
							<p className="font-semibold text-black/90">Pesanan</p>
							<p className="text-black/50">Lihat dan kelola apa saja pesanan kamu.</p>
						</a>
						<a className="block rounded-lg py-2 px-3 transition hover:bg-black/5" href="#">
							<p className="font-semibold text-black/90">Transaksi</p>
							<p className="text-black/50">Daftar transaksi yang pernah kamu lakukan.</p>
						</a>
					</div>
					<div className="w-full h-[1px] bg-black/30"></div>
					<div className="p-3 border-t-2 border-black">
						<button onClick={handleLogout} className="text-start block rounded-lg py-3 px-3 transition hover:bg-black/5 w-full">
							<p className="font-semibold text-black">Logout</p>
						</button>
					</div>
				</PopoverPanel>
			</Transition>
		</Popover>
	)
}

function Navbar() {
	const profile = useProfileStore(s => ({ image: s?.gambar?.nama, id: s?.id }))

	return (
		<nav className=" bg-sky-600 w-full fixed dark:bg-gray-900 z-50">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a
					href="#"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img src="/img/logo/sujud.png" className="h-8" />
				</a>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className="hidden w-full md:block md:w-auto"
					id="navbar-default"
				>
					<ul className="tex-t font-medium flex flex-col p-4 md:p-0 mt-4 border items-center border-gray-100 rounded-lg md:flex-row rtl:space-x-reverse md:mt-0 md:border-0  md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<a
								href="#"
								className="px-4 py-3 font-semibold rounded-md text-white hover:bg-sky-500/25 transition-all "
							>
								Shop All
							</a>
						</li>

						<li>
							<a
								href="#"
								className="px-4 py-3 font-semibold rounded-md text-white hover:bg-sky-500/25 transition-all "
							>
								About Us
							</a>
						</li>
						{ match(Boolean(profile?.id))
							.with(true, () => (
								<>
									<li>
										<Link to="/cart" className="mx-3 block px-3 py-3 font-semibold rounded-full bg-white text-sky-600 hover:bg-sky-500/25 hover:text-white transition-all ">
											<MdShoppingCart />
										</Link>
									</li>
									<li>
										<ProfileDropdown profileImage={ `/api/uploaded/${profile?.image}` } />
									</li>
								</>
							))
							.otherwise(() => (
								<li>
									<div className="px-6 py-2 font-semibold rounded-full bg-white text-sky-600 hover:bg-sky-500/25 hover:text-white transition-all ">
										Register{ " " }
									</div>
								</li>
							)) }
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

import { GoPencil } from "react-icons/go";
import { Link } from "@tanstack/react-router"
import FormLogin from "./form"
import Header from "../../components/template/Header"
import { useGetProfile } from "../../adapters/hooks/useProfile"
import { match } from "ts-pattern"
import Loader from "../../components/loader"
import ProfileUpdate from "./profile-update"
import ProfilePictureUpdate from "./profile-picture-update"
import Navbar from "../../components/navbar"
import { twMerge } from "tailwind-merge"
import ModalChangeAddress from "./modal-change-address";

export default function ProfileModule() {
	const { data } = useGetProfile()

	return (
		<div className="dark:bg-boxdark-2 min-h-[100vh]">
			{ match(data?.response?.role_id)
				.with(2, () => (<Navbar />))
				.otherwise(() => <Header withSidebar={ false } withSearch={ false } /> ) }
			<div className={twMerge("max-w-[1000px] mx-auto", data?.response?.role_id == 2 ? "pt-32" : "mt-10" )}>
				<div className="flex px-4 justify-between flex-col sm:flex-row sm:items-center">
					<div>
						<h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-zinc-100">Profile</h3>
						<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-zinc-300">Detail informasi profile.</p>
					</div>
					{ data?.response && <ProfileUpdate profile={data.response} /> }
				</div>
				{ match(Boolean(data?.response))
					.with(true, () => (
						<div className="mt-6 border-t px-4">
							<dl>
								<div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
									<dt className="text-sm font-medium leading-6 text-gray-900 dark:text-zinc-100">Full name</dt>
									<dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-zinc-300 sm:col-span-2 sm:mt-0">{data?.response.nama}</dd>
								</div>
								<div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
									<dt className="text-sm font-medium leading-6 text-gray-900 dark:text-zinc-100">Nomor whatsapp</dt>
									<dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-zinc-300 sm:col-span-2 sm:mt-0">{data?.response.nomor}</dd>
								</div>
								<div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
									<dt className="text-sm font-medium leading-6 text-gray-900 dark:text-zinc-100">Alamat email</dt>
									<dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-zinc-300 sm:col-span-2 sm:mt-0">{data?.response.email}</dd>
								</div>
								<div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
									<dt className="text-sm font-medium leading-6 text-gray-900 dark:text-zinc-100">Alamat</dt>
									<dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-zinc-300 sm:col-span-2 sm:mt-0 flex gap-3 items-top capitalize">
										<span>{data?.response.alamat}</span>
										<ModalChangeAddress profile={data?.response} />
									</dd>
								</div>
								<div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
									<dt className="text-sm font-medium leading-6 text-gray-900 dark:text-zinc-100">Foto profile</dt>
									<dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-zinc-300 sm:col-span-2 sm:mt-0">
										<ProfilePictureUpdate imageName={data?.response?.gambar?.nama} />
									</dd>
								</div>
							</dl>
						</div>
					))
					.otherwise(() => <Loader />) }
			</div>
		</div>
	)
}
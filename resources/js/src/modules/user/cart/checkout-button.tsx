import {
	Button,
	Dialog,
	DialogPanel,
	DialogTitle,
	Switch,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import { Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useEffect, useRef, useState } from "react";
import Textarea from "../../../components/textarea";
import { useProfileStore } from "../../../store/useProfile";
import { useCreatePesanan } from "../../../adapters/hooks/usePesanan";
import Swal from "sweetalert2";
import { cartRoute } from "../../../routes/user";
import { toastError } from "../../../utils/toast";
import { P, match } from "ts-pattern";
import SelectAddress from "../../../components/select-address";
import { twMerge } from "tailwind-merge";

export default function CheckoutButton({
	selectedProduct,
}: {
	selectedProduct: {
		id: number;
		qty: number;
		harga: number;
		varian_id: number;
		harga_diskon: number;
	}[];
}) {
	const navigate = useNavigate({ from: cartRoute.fullPath });
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const alamat = useProfileStore((s) => s.alamat);
	let [isOpen, setIsOpen] = useState(false);
	const pesanan = useCreatePesanan();
	const [isCurrentAddress, setIsCurrentAddress] = useState(true);
	const [customAddress, setCustomAddress] = useState({
		prov: null,
		rege: null,
		dist: null,
		vill: null,
	});

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	function handlePesan(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if(!isCurrentAddress && (!customAddress.prov || !customAddress.rege || !customAddress.dist || !customAddress.vill)) return toastError("Lengkapi alamat terlebih dahulu")
		if (pesanan.isPending) return;
		if (!selectedProduct.length) {
			setIsOpen(false);
			return toastError("Tidak ada produk yang dipilih");
		}

		const callbackOptions = {
			onSuccess: () => {
				setIsOpen(false);
				Swal.fire({
					icon: "success",
					title: "Berhasil",
					text: "Berhasil membuat pesanan",
					confirmButtonText: "Lihat pesananmu",
				}).then(({ isConfirmed }) => {
					if (isConfirmed) navigate({ to: "/pesanan" });
				});
			},
			onError: () => toastError("Gagal membuat pesanan"),
		}

		if (isCurrentAddress) return pesanan.mutate( { pesanan: selectedProduct, alamat: textareaRef.current?.value }, callbackOptions );

		if(Object.values(customAddress).includes(null)) return toastError("Alamat belum lengkap")
		const formData = new FormData(e.target as HTMLFormElement);
		const str = `${customAddress.prov}, ${customAddress.rege}, ${customAddress.dist}, ${customAddress.vill}, ${formData.get("postal")}, ${formData.get("detail")}.`
			.replace(', , .', '.')
			.replace(', .', '.')
			.replace(', , ', ', ')
			.toLocaleLowerCase();
		
		return pesanan.mutate( { pesanan: selectedProduct, alamat: str }, callbackOptions );
	}

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => {
				if (textareaRef?.current) {
					textareaRef.current.focus();
				}
			}, 100);
		}
	}, [isOpen, textareaRef]);

	useEffect(() => {  
		
		if(!isOpen) {
			setIsCurrentAddress(true);
		}

	}, [isOpen])

	return (
		<>
			<button
				onClick={ open }
				disabled={ !selectedProduct.length }
				className="disabled:bg-primary/50 disabled:cursor-not-allowed bg-primary text-white px-5 py-2 rounded-full flex items-center gap-2"
			>
				<span>Checkout</span>
			</button>

			<Transition appear show={ isOpen }>
				<Dialog
					as="div"
					className="relative z-10 focus:outline-none"
					onClose={ close }
				>
					<div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
						<div className="flex min-h-full items-center justify-center p-4">
							<TransitionChild
								enter="ease-out duration-300"
								enterFrom="opacity-0 transform-[scale(95%)]"
								enterTo="opacity-100 transform-[scale(100%)]"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 transform-[scale(100%)]"
								leaveTo="opacity-0 transform-[scale(95%)]"
							>
								<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl border border-black/10 shadow-sm">
									<DialogTitle
										as="h3"
										className="text-base/7 font-semibold text-black"
									>
										Alamat lengkap pengiriman
									</DialogTitle>
									<p className="mt-2 text-sm/6 text-black/80">
										Kamu bisa mengubah default alamat
										pengiriman di halaman{ " " }
										<Link
											to="/profile"
											className="text-sky-500"
										>
											profil
										</Link>
										.
									</p>
									<form onSubmit={ handlePesan }>
										{ match(alamat)
											.with(P.string, () => (
												<>
													<div className="flex justify-start gap-1 mt-5 mb-3 items-center">
														<Switch
															checked={ isCurrentAddress }
															onChange={ () => setIsCurrentAddress(v => !v) }
															className="group relative flex h-6 w-10 cursor-pointer rounded-full bg-sky-600/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-sky-600/10"
														>
															<span
																aria-hidden="true"
																className={ twMerge("pointer-events-none inline-block size-4 translate-x-0 rounded-full ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-3", isCurrentAddress ? "bg-sky-600" : "bg-sky-600/20") }
															/>
														</Switch>
														<span onClick={ () => setIsCurrentAddress(v => !v) } className="-mt-1 text-sm text-black cursor-pointer">Gunakan alamat saat ini.</span>
													</div>
													{ isCurrentAddress
														? (
															<Textarea
																disabled={ true }
																defaultValue={ alamat }
																ref={textareaRef}
																name="alamat"
															/>
														)
														: (
															<SelectAddress setAddress={ setCustomAddress } />
														)
													}
												</>
											))
											.otherwise(() => (
												<SelectAddress setAddress={ setCustomAddress } />
											)) }
										<div className="mt-4">
											<Button
												type="submit"
												className="ml-auto flex items-center gap-2 rounded-md bg-sky-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-primary data-[focus]:outline-1 data-[focus]:outline-white"
											>
												Buat Pesanan
											</Button>
										</div>
									</form>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

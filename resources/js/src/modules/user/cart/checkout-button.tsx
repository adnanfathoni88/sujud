import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import Textarea from '../../../components/textarea'
import { useProfileStore } from '../../../store/useProfile'
import { useCreatePesanan } from '../../../adapters/hooks/usePesanan'
import Swal from 'sweetalert2'
import { cartRoute } from '../../../routes/user'
import { toastError } from '../../../utils/toast'

export default function CheckoutButton({ selectedProduct }: {
	selectedProduct: {
		id: number,
		qty: number,
		harga: number,
		varian_id: number,
		harga_diskon: number,
	}[]
}) {
	const navigate = useNavigate({ from: cartRoute.fullPath })
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const alamat = useProfileStore(s => s.alamat)
	let [isOpen, setIsOpen] = useState(false)
	const pesanan = useCreatePesanan()

	function open() {
		setIsOpen(true)
	}

	function close() {
		setIsOpen(false)
	}

	function handlePesan() {
		if (pesanan.isPending) return
		if (!textareaRef.current?.value?.trim()) return
		if (!selectedProduct.length) {
			setIsOpen(false)
			return toastError("Tidak ada produk yang dipilih")
		}
		pesanan.mutate({ pesanan: selectedProduct, alamat: textareaRef.current?.value }, {
			onSuccess: () => {
				setIsOpen(false)
				Swal.fire({
					icon: "success",
					title: "Berhasil",
					text: "Berhasil membuat pesanan",
					confirmButtonText: "Lihat pesananmu",
				}).then(({ isConfirmed }) => { if (isConfirmed) navigate({ to: "/pesanan" }) })
			},
			onError: () => toastError("Gagal membuat pesanan")
		});
	}

	useEffect(() => {

		if (isOpen) {
			setTimeout(() => {
				if (textareaRef?.current) {
					textareaRef.current.focus()
				}
			}, 100);
		}

	}, [isOpen, textareaRef])

	return (
		<>
			<button onClick={ open } className="bg-primary text-white px-5 py-2 rounded-full flex items-center gap-2">
				<span>Checkout</span>
			</button>

			<Transition appear show={ isOpen }>
				<Dialog as="div" className="relative z-10 focus:outline-none" onClose={ close }>
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
									<DialogTitle as="h3" className="text-base/7 font-medium text-black">
										Alamat lengkap pengiriman
									</DialogTitle>
									<p className="mt-2 text-sm/6 text-black/80">
										Kamu bisa mengubah default alamat pengiriman di halaman <Link to="/profile" className="text-sky-500">profil</Link>.
									</p>
									<div className="mb-7 mt-3">
										<Textarea ref={ textareaRef } defaultValue={ alamat ?? "" } name="alamat" />
									</div>
									<div className="mt-4">
										<Button
											className="ml-auto flex items-center gap-2 rounded-md bg-primary py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-primary data-[focus]:outline-1 data-[focus]:outline-white"
											onClick={ handlePesan }
										>
											Buat Pesanan
										</Button>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
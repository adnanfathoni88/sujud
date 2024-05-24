import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import Textarea from "../../components/textarea";
import { useEffect, useRef, useState } from "react";
import { useUpdateOngkirSetResi } from "../../adapters/hooks/useOngkir";
import { useSearch } from "@tanstack/react-router";
import { toastSuccess } from "../../utils/toast";

export default function SetResi({ ongkirId }: { ongkirId: number }) {
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	let [isOpen, setIsOpen] = useState(false)
	const setResi = useUpdateOngkirSetResi();
	const search = useSearch({ strict: false })

	function open() {
		setIsOpen(true)
	}

	function close() {
		setIsOpen(false)
	}

	function handleUpdate() {
		if (!ongkirId) return
		if (!textareaRef.current?.value?.trim()) return
		setResi.mutate({ resi: textareaRef.current?.value, ongkirId, page: search?.page, status: search?.status  }, {
			onError: () => toastSuccess("Gagal mengisi Resi Pengiriman"),
			onSuccess: () => toastSuccess("Berhasil mengisi Resi Pengiriman"),
		})
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
			<button onClick={ open } className="bg-orange-400 py-1 px-4 text-white rounded text-sm">
				Set resi
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
										Atur resi pengiriman
									</DialogTitle>
									<div className="mb-7 mt-3">
										<Textarea ref={ textareaRef } name="alamat" />
									</div>
									<div className="mt-4">
										<Button
											className="ml-auto flex items-center gap-2 rounded-md bg-primary py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-primary data-[focus]:outline-1 data-[focus]:outline-white"
											onClick={ handleUpdate }
										>
											Save
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
import { useState } from "react"
import Modal from "../../../components/modal"
import { DialogPanel, DialogTitle } from "@headlessui/react"
import { IoMdClose } from "react-icons/io"
import DialogUlasanForm from "./dialog-ulasan-form"

export default function GiveRating({ varianId }: { varianId: number }) {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<Modal
			open={ open }
			onOpen={ () => setOpen(true) }
			onClose={ () => setOpen(false) }
			Trigger={ <button onClick={() => setOpen(true)} className="text-xs bg-yellow-500 text-white p-1 rounded">Beri ulasan</button> }
		>
			<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
				<DialogTitle as="h3" className="text-base/7 mb-5 font-semibold text-black dark:text-white flex items-center justify-between">
					<span>Beri Ulasan</span>
					<button onClick={ () => setOpen(false) }><IoMdClose size={ 20 } /></button>
				</DialogTitle>
				<DialogUlasanForm varianId={varianId} />
			</DialogPanel>
		</Modal>
	)
}
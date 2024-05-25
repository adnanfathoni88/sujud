import { DialogPanel, DialogTitle } from "@headlessui/react";
import Modal from "../../../components/modal";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import MetodeBayar from "./metode-bayar";

export default function ModalMetodeBayar({ pesananGrup }: { pesananGrup: string }) {
	const [open, setOpen] = useState(false);
	const [disableClose, setDisableClose] = useState(false);

	const onClose = () => {
		if(disableClose) return;
		setOpen(false);
	}

	return (
		<>
			<Modal
				open={ open }
				onOpen={ () => setOpen(true) }
				onClose={ onClose }
				Trigger={ (
					<button
						className="bg-sky-500 text-white px-4 py-2 rounded-md h-fit mt-2 ml-auto sm:ml-0 sm:mt-0"
						onClick={ () => setOpen(true) }
					>
						Pilih Pembayaran
					</button>
				) }
			>
				<DialogPanel className="w-full max-w-[500px] rounded-xl bg-white p-6 dark:bg-boxdark-2 relative">
					<DialogTitle as="h3" className="text-base/7 mb-5 font-semibold text-black dark:text-white flex items-center justify-between">
						<span>Pilih Metode Pembayaran</span>
						<button onClick={ onClose }><IoMdClose size={ 20 } /></button>
					</DialogTitle>
					<MetodeBayar pesananGrup={pesananGrup} setDisableClose={setDisableClose} />
				</DialogPanel>
			</Modal>
		</>
	)
}
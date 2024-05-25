import { IoIosCloseCircle } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { DialogPanel, DialogTitle } from "@headlessui/react";
import Loader from "../../components/loader";
import Modal from "../../components/modal";
import { IoMdClose } from "react-icons/io";
import { FormEvent, useState } from "react";
import { useCheckTransaction } from "../../adapters/hooks/useTransaksi";
import { P, match } from "ts-pattern";


function ModalBody() {
	const [invoice, setInvoice] = useState<string>("");
	const { data, isLoading } = useCheckTransaction({ pesananGrup: invoice })

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const invoice = formData.get("invoice") as string
		if(!invoice?.trim()) return
		setInvoice(invoice)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" className="w-full bg-black/10 outline-none focus:outline-none py-2 px-3 rounded" name="invoice" placeholder="Masukkan Invoice (Enter)" />
				<button type="submit" className="hidden"></button>
			</form>
			{ match([data, data?.response?.Message, data?.response?.statusMessage, isLoading])
				.with([P.any, undefined, P.string, false], () => (
					<div className="bg-green-100 px-8 py-10 mt-5 rounded flex items-center flex-col gap-4">
						<FaCircleCheck className="text-green-300" size={40} />
						<p className="text-green-600 font-semibold">{data?.response?.statusMessage}</p>
					</div>
				))
				.with([P.any, P.string, P.nullish, false], () => (
						<div className="bg-red-100 px-8 py-10 mt-5 rounded flex items-center flex-col gap-4">
						<IoIosCloseCircle className="text-red-300" size={40} />
						<p className="text-red-600 font-semibold">{data?.response?.Message}</p>
					</div>
				))
				.with([P.any, P.any, P.any, true], () => <Loader />)
				.otherwise(() => null) }
		</div>
	)
}

export default function ModalCheckTransaction() {
	const [open, setOpen] = useState(false);

	return (
		<Modal
			open={ open }
			onOpen={ () => setOpen(true) }
			onClose={ () => setOpen(false) }
			Trigger={ <button onClick={() => setOpen(true) } className="bg-first text-white rounded text-sm py-2 px-3">Cek transaksi</button> }
		>
			<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
				<DialogTitle as="h3" className="text-base/7 mb-5 font-semibold text-black dark:text-white flex items-center justify-between">
					<span>Cek Transaksi</span>
					<button onClick={ () => setOpen(false) }><IoMdClose size={ 20 } /></button>
				</DialogTitle>
				<ModalBody />
			</DialogPanel>
		</Modal>
	)
}
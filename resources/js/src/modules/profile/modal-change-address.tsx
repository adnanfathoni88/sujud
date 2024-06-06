import { FormEvent, useState } from "react";
import Modal from "../../components/modal";
import { GoPencil } from "react-icons/go";
import { DialogPanel, DialogTitle } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import SelectAddress from "../../components/select-address";
import { IProfile } from "../../interfaces/profile";
import { useUpdateProfile } from "../../adapters/hooks/useProfile";
import { toastError, toastSuccess } from "../../utils/toast";

export default function ModalChangeAddress({ profile }: { profile: IProfile }) {
	const updateProfile = useUpdateProfile()
	const [address, setAddress] = useState({
		prov: null,
		rege: null,
		dist: null,
		vill: null,
	})
	const [open, setOpen] = useState(false)

	const onOpen = () => {
		setOpen(true)
	}

	const onClose = () => {
		setOpen(false)
	}

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (updateProfile.isPending) return
		if (!address.prov || !address.rege || !address.dist || !address.vill) return toastError("Lengkapi alamat terlebih dahulu")
		const formData = new FormData(e.target as HTMLFormElement)
		const alamat = `${address.prov}, ${address.rege}, ${address.dist}, ${address.vill}, ${formData.get("postal")}, ${formData.get("detail")}.`
			.replace(', , .', '.')
			.replace(', .', '.')
			.replace(', , ', ', ')
			.toLocaleLowerCase();
		updateProfile.mutate({ ...profile, alamat }, {
			onSuccess: () => {
				setOpen(false)
				toastSuccess("Alamat berhasil diubah")
			},
			onError: (e) => toastError("Gagal mengubah alamat")
		})
		
	}

	return (
		<Modal
			open={ open }
			onOpen={ onOpen }
			onClose={ () => { } }
			Trigger={ (
				<button onClick={ onOpen } className="bg-primary text-white p-2 rounded h-fit"><GoPencil size={ 20 } /></button>
			) }
		>
			<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
				<DialogTitle as="h3" className="text-base/7 mb-5 font-semibold text-black dark:text-white flex items-center justify-between">
					<span>Ubah Alamat</span>
					<button onClick={ () => setOpen(false) }><IoMdClose size={ 20 } /></button>
				</DialogTitle>
				<form onSubmit={onSubmit}>
					<SelectAddress setAddress={ setAddress } />
					<button className="bg-first text-white px-5 py-2 rounded ml-auto block mt-8">Save</button>
				</form>
			</DialogPanel>
		</Modal>
	)
}
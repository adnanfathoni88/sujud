import { useState } from "react"
import Modal from "../../components/modal"
import { DialogPanel, DialogTitle } from "@headlessui/react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateOngkir } from "./schema";
import TextGroup from "../../components/text-group";
import { useUpdateOngkir } from "../../adapters/hooks/useOngkir";
import { toastError, toastSuccess } from "../../utils/toast";

export default function KonfirmasiPesanan({ disabled, ongkir, berat, ekspedisi, ongkirId }: { disabled?: boolean, ongkir: number, berat: number, ekspedisi: string, ongkirId: number }) {
	const [open, setOpen] = useState(false)
	const updateOngkir = useUpdateOngkir()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(UpdateOngkir),
		defaultValues: {
			berat,
			ongkir,
			ekspedisi,
		},
	});

	const onSubmit = handleSubmit((data) => {
		updateOngkir.mutate(
			{ ongkirId, ...data },
			{
				onSuccess: () => {
					setOpen(false);
					toastSuccess("Ongkir berhasil diupdate");
				},
				onError: (err: any) => {
					toastError(err?.response?.data?.response ?? "Gagal mengupdate ongkir")
				},
			}
		);
	});

	return (
		<Modal
			open={ open }
			title="Buat Kategori"
			onOpen={ () => setOpen(true) }
			onClose={ () => setOpen(false) }
			Trigger={ (<button disabled={disabled} onClick={ () => setOpen(true) } className="disabled:bg-first/50 disabled:cursor-not-allowed bg-first text-white w-[300px] py-3 rounded pb-4 mt-6 ml-auto block">Konfirmasi Pesanan</button>) }
		>
			<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
				<DialogTitle as="h3" className="text-base/7 mb-5 font-semibold text-black dark:text-white">
					Konfirmasi Pesanan
				</DialogTitle>
				<form onSubmit={ onSubmit }>
					<TextGroup
						required
						type="text"
						title="Ekspedisi (JNE, JNT, dll)"
						errorMessage={ errors.ekspedisi?.message }
						{ ...register("ekspedisi") }
					/>
					<div className="mt-4">
						<TextGroup
							required
							type="number"
							title="Berat (gram)"
							errorMessage={ errors.berat?.message }
							{ ...register("berat") }
						/>
					</div>
					<div className="mt-4">
						<TextGroup
							required
							type="number"
							title="Ongkir"
							errorMessage={ errors.ongkir?.message }
							{ ...register("ongkir") }
						/>
					</div>
					<button
						type="submit"
						className="mt-8 px-15 py-3 ml-auto block text-white w-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
					>
						Submit
					</button>
				</form>
			</DialogPanel>
		</Modal>
	)
}
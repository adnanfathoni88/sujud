import { DialogPanel, DialogTitle } from "@headlessui/react";
import { CiCamera } from "react-icons/ci";
import Modal from "../../components/modal";
import { useState } from "react";
import ImageInput from "../../components/image-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UpdateProfilePicture } from "./schema";
import { useUpdateProfilePicture } from "../../adapters/hooks/useProfile";
import { toastError, toastSuccess } from "../../utils/toast";

export default function ProfilePictureUpdate({ imageName }: { imageName: string }) {
	const [open, setOpen] = useState(false)
	const updateProfilePicture = useUpdateProfilePicture()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(UpdateProfilePicture),
		defaultValues: { image: undefined },
	})

	const onSubmit = handleSubmit((data) => {
		updateProfilePicture.mutate(data, {
			onSuccess: () => {
				setOpen(false)
				toastSuccess("Foto profile berhasil diupdate")
			},
			onError: () => toastError("Gagal mengupdate foto profile")
		})
	})

	return (
		<>
			<div className="w-[150px] h-[150px] bg-zinc-300 rounded-full relative overflow-hidden">
				{ imageName.trim() && <img src={`/api/uploaded/${imageName.trim()}`} alt="profile" className="absolute inset-0 w-full h-full object-cover rounded-full" /> }
				<button onClick={() => setOpen(true)} className="border-0 absolute inset-0 bg-black/50 opacity-0 transition-all hover:opacity-100 flex items-center justify-center">
					<CiCamera className="text-white text-4xl" />
				</button>
			</div>
			<Modal
				open={ open }
				onOpen={ () => setOpen(true) }
				onClose={ () => setOpen(false) }
				Trigger={ <></> }
			>
				<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
					<DialogTitle as="h3" className="text-base/7 mb-5 font-semibold text-black dark:text-white">
						Update Foto Profile
					</DialogTitle>
					<form onSubmit={onSubmit}>
						<ImageInput
							label="Foto profile"
							error={ errors.image?.message as string }
							{ ...register('image') }
						/>
						<button
							type="submit"
							disabled={ updateProfilePicture.isPending }
							className="mt-8 px-15 py-3 ml-auto block text-white w-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
						>
							Submit
						</button>
					</form>
				</DialogPanel>
			</Modal>
		</>
	)
}
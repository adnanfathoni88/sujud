import { DialogPanel, DialogTitle } from '@headlessui/react'
import Modal from "../../components/modal";
import { useState } from "react";
import TextGroup from '../../components/text-group';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdatePassword, UpdateProfile } from './schema';
import { toastError, toastSuccess } from '../../utils/toast';
import { IProfile } from '../../interfaces/profile';
import Textarea from '../../components/textarea';
import { useUpdateProfile } from '../../adapters/hooks/useProfile';
import { api } from '../../services/api';

export default function PasswordUpdate({ profile }: { profile: IProfile }) {
	const [open, setOpen] = useState(false)
	const addVarian = useUpdateProfile()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ 
		resolver: zodResolver(UpdatePassword),
		defaultValues: {
			oldPassword: '',
			newPassword: ''
		}
	})

	const onSubmit = handleSubmit((data) => {
		api.post('/auth/update-password', { old_password: data.oldPassword, new_password: data.newPassword })
			.then(() => window.location.reload())
			.catch((e) => toastError(e?.response?.data?.response ?? "Gagal mengubah password"))
	})

	console.log(errors)

	return (
		<Modal
			open={ open }
			title="Buat Kategori"
			onOpen={ () => setOpen(true) }
			onClose={ () => setOpen(false) }
			Trigger={ <button onClick={ () => setOpen(true) } className="rounded-md border border-first text-first py-2 px-4 text-sm font-medium w-fit mt-7">Ubah Password</button> }
		>
			<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
				<DialogTitle as="h3" className="text-base/7 mb-5 font-semibold text-black dark:text-white">
					Ubah Password
				</DialogTitle>
				<form onSubmit={ onSubmit }>
					<TextGroup
						required
						type="password"
						title="Password lama"
						errorMessage={ errors.oldPassword?.message }
						{ ...register('oldPassword') }
					/>
					<div className="mt-4">
						<TextGroup
							required
							type="password"
							title="Password baru"
							errorMessage={ errors.newPassword?.message }
							{ ...register('newPassword') }
						/>
					</div>
					<button
						type="submit"
						disabled={ addVarian.isPending }
						className="mt-8 px-15 py-3 ml-auto block text-white w-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
					>
						Submit
					</button>
				</form>
			</DialogPanel>
		</Modal>
	)
}
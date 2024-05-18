import { Button, DialogPanel, DialogTitle } from '@headlessui/react'
import CategoryModal from "../../components/modal";
import TextGroup from '../../components/text-group';
import { FormEvent, useRef, useState } from 'react';
import { useAddCategory } from '../../adapters/hooks/useCategoy';
import { toastSuccess } from '../../utils/toast';

export default function NewCategory() {
	const newCategory = useAddCategory()
	const [open, setOpen] = useState(false)
	const formRef = useRef<HTMLFormElement | undefined>()

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		newCategory.mutate(formData.get('kategori') as string, { 
			onSuccess: () => {
				setOpen(false)
				toastSuccess("Berhasil menambahkan!")
			} 
		})
	}

	return (
		<CategoryModal title="Buat Kategori" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
			<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
				<DialogTitle as="h3" className="text-base/7 font-semibold text-black dark:text-white">
					Kategori
				</DialogTitle>
				<form onSubmit={onSubmit} ref={formRef}>
					<TextGroup
						title=''
						required
						type='text'
						name='kategori'
						placeholder="Nama Kategori"
					/>
					<div className="mt-4">
						<Button 
							type='submit'
							className="block ml-auto items-center gap-2 rounded-md bg-first py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none"
						>
							Simpan
						</Button>
					</div>
				</form>
			</DialogPanel>
		</CategoryModal>
	)
}
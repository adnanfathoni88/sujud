import { Button, DialogPanel, DialogTitle } from '@headlessui/react'
import CategoryModal from "../../components/modal";
import TextGroup from '../../components/text-group';
import { useRef, useState } from 'react';
import { toastError, toastSuccess } from '../../utils/toast';
import { IBaseProduct } from '../../interfaces/product';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TUpdateProductSchema, UpdateProductSchema } from './schema';
import Textarea from '../../components/textarea';
import Select from '../../components/select';
import { useEditProduct } from '../../adapters/hooks/useProducts';
import { useGetCategoryList } from '../../adapters/hooks/useCategory';
import { PiNotePencilLight } from "react-icons/pi";

export default function UpdateProduct({ product }: { product: IBaseProduct }) {
	const update = useEditProduct()
	const { data } = useGetCategoryList()
	const [open, setOpen] = useState(false)
	const formRef = useRef<HTMLFormElement | undefined>()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(UpdateProductSchema),
		defaultValues: {
			kode: product.kode,
			nama: product.nama,
			deskripsi: product.deskripsi,
			kategori_id: product.kategori_id,
		},
	})

	const onSubmit = (value: TUpdateProductSchema) => {
		update.mutate({ ...value, id: product.id }, {
			onSuccess: () => {
				setOpen(false)
				toastSuccess("Berhasil mengupdate!")
			},
			onError: () => {
				setOpen(false)
				toastError("Gagal mengupdate!")
			}
		})
	}

	return (
		<CategoryModal
			open={ open }
			title="Buat Kategori"
			onOpen={ () => setOpen(true) }
			onClose={ () => setOpen(false) }
			Trigger={ (
				<button className="hover:text-primary" onClick={ () => setOpen(true) }>
					<PiNotePencilLight size={ 20 } />
				</button>
			) }
		>
			<DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
				<DialogTitle as="h3" className="text-base/7 mb-5 font-semibold text-black dark:text-white">
					Update Produk
				</DialogTitle>
				<form onSubmit={ handleSubmit(onSubmit) } ref={ formRef }>
					<TextGroup
						required
						type="text"
						title="Nama"
						errorMessage={ errors.nama?.message }
						{ ...register('nama') }
					/>
					<div className="mt-4">
						<TextGroup
							required
							type="text"
							title="Kode"
							errorMessage={ errors.kode?.message }
							{ ...register('kode') }
						/>
					</div>
					<div className="mt-4">
						<Textarea
							required
							label="Deskripsi"
							error={ errors.deskripsi?.message }
							{ ...register('deskripsi') }
						/>
					</div>
					<div className="mt-4">
						{ Array.isArray(data?.response) && (
							<Select
								label="Kategori"
								options={ data.response }
								defaultValue={ 0 }
								error={ errors?.kategori_id?.message }
								{ ...register("kategori_id") }
							/>
						) }
					</div>
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
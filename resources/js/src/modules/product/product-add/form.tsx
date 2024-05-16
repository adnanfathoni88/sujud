import { useState } from "react";
import { useMutation } from "@tanstack/react-query"; // Import queryClient
import { TCategoryList } from "../../../adapters/api/category";
import { useAddProduct } from "../../../adapters/hooks/useProducts";
import { useForm } from "react-hook-form";
import { AddProductSchema, TAddProductSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextGroup from "../../../components/text-group";
import { toastSuccess } from "../../../utils/toast";
import { useNavigate } from "@tanstack/react-router";

export default function FormAddProduct({ category }: { category: TCategoryList }) {
	const productAdd = useAddProduct()
	const navigate = useNavigate({ from: "/product/add" })
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(AddProductSchema),
		defaultValues: {
			kode: '',
			nama: '',
			deskripsi: '',
			kategori_id: '',
			warna: '',
			ukuran: '',
			harga: 0,
			stok: 0,
			image: undefined,
		}
	})

	const onSubmit = (data: any) => {
		productAdd.mutate(data as TAddProductSchema, {
			onSuccess: () => {
				toastSuccess("Success add new product")
				navigate({ to: "/product" })
			}
		});
	};

	return (
		<form className="mx-auto" onSubmit={ handleSubmit(onSubmit) }>
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
				<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Deskripsi
				</label>
				<textarea
					{ ...register("deskripsi") }
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
				{ errors?.deskripsi?.message && <small className="text-red-600 font-semibold">{(errors?.deskripsi as any)?.message}</small> }
			</div>
			<div className="mt-4">
				<label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
				<select { ...register("kategori_id") } id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					{ category.map(v => (
						<option key={ v.id } value={ v.id }>{ v.nama }</option>
					)) }
				</select>
				{ errors?.kategori_id?.message && <small className="text-red-600 font-semibold">{(errors?.kategori_id as any)?.message}</small> }
			</div>
			<hr className="mt-12 mb-7" />
			<TextGroup
				required
				type="text"
				title="Warna"
				errorMessage={ errors.warna?.message }
				{ ...register('warna') }
			/>
			<div className="mt-4">
				<TextGroup
					required
					type="number"
					title="Harga"
					errorMessage={ errors.harga?.message }
					{ ...register('harga') }
				/>
			</div>
			<div className="mt-4">
				<TextGroup
					required
					type="number"
					title="Stok"
					errorMessage={ errors.stok?.message }
					{ ...register('stok') }
				/>
			</div>
			<div className="mt-4">
				<label htmlFor="file_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Gambar
				</label>
				<input
					className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
					id="file_input"
					type="file"
					accept="image/*"
					{ ...register("image") }
				/>
				{ errors?.image?.message && <small className="text-red-600 font-semibold">{(errors?.image as any)?.message}</small> }
			</div>
			<div className="mt-4">
				<label htmlFor="ukuran" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ukuran</label>
				<select { ...register("ukuran") } id="ukuran" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
					<option value="XL">XL</option>
					<option value="XXL">LXX</option>
				</select>
				{ errors?.ukuran?.message && <small className="text-red-600 font-semibold">{(errors?.ukuran as any)?.message}</small> }
			</div>
			<button
				type="submit"
				className="mt-8 px-10 text-white w-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
			>
				Submit
			</button>
		</form>
	)
}
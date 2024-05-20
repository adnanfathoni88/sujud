import { useState } from "react";
import { useMutation } from "@tanstack/react-query"; // Import queryClient
import { useAddProduct } from "../../adapters/hooks/useProducts";
import { useForm } from "react-hook-form";
import { AddProductSchema, TAddProductSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextGroup from "../../components/text-group";
import { toastError, toastSuccess } from "../../utils/toast";
import { useNavigate } from "@tanstack/react-router";
import { ICategoryList } from "../../interfaces/category";
import Select from "../../components/select";
import TextArea from "../../components/textarea";
import ImageInput from "../../components/image-input";

export default function FormAddProduct({ category }: { category: ICategoryList }) {
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
		},
	})

	const onSubmit = (data: any) => {
		productAdd.mutate(data as TAddProductSchema, {
			onSuccess: () => {
				toastSuccess("Success add new product")
				navigate({ to: "/admin/produk" })
			},
			onError: () => toastError("Failed add new product")
		});
	};

	return (
		<form className="mx-auto pb-10" onSubmit={ handleSubmit(onSubmit) }>
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
				<TextArea
					required
					label="Deskripsi"
					error={ errors.deskripsi?.message }
					{ ...register('deskripsi') }
				/>
			</div>
			<div className="mt-4">
				<Select
					label="Kategori"
					options={ category }
					defaultValue={ 0 }
					error={ errors?.kategori_id?.message }
					{ ...register("kategori_id") }
				/>
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
				<ImageInput
					label="Gambar"
					error={ errors.image?.message as string }
					{ ...register('image') }
				/>
			</div>
			<div className="mt-4">
				<Select
					name="ukuran"
					label="Ukuran"
					options={ [
						{ id: 0, nama: "S" },
						{ id: 1, nama: "M" },
						{ id: 2, nama: "L" },
						{ id: 3, nama: "XL" },
						{ id: 4, nama: "XXL" }
					] }
					defaultValue={ 0 }
					error={ errors?.ukuran?.message }
					{ ...register("ukuran") }
				/>
			</div>
			<button
				type="submit"
				className="mt-8 px-15 py-3 ml-auto block text-white w-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
			>
				Submit
			</button>
		</form>
	)
}
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { match } from "ts-pattern"
import { useDeleteCart, useGetCartList, useUpdateCart } from "../../../adapters/hooks/useCart"
import Loader from "../../../components/loader"
import { useState } from "react";
import { toastError, toastSuccess } from "../../../utils/toast";

let timeout: any;

function QtyUpdate({ varianId, productId, id, qty }) {
	const [val, setVal] = useState<number>(isNaN(Number(qty)) ? 1 : qty)
	const updateCart = useUpdateCart()
	const deleteCart = useDeleteCart()

	const debounce = (v: number) => {
		if(timeout) clearTimeout(timeout)
		timeout = setTimeout(() => {
			updateCart.mutate({ produkId: productId, varianId, id, qty: v }, {
				onSuccess: () => toastSuccess("Berhasil mengubah kuantitas"),
				onError: () => toastError("Gagal mengubah kuantitas")
			})
		}, 1500);
	}

	const handleMin = () => {
		if (val <= 1) return
		setVal(v => v - 1)
		debounce(val - 1)
	}
	
	const handlePlus = () => {
		setVal(v => v + 1)
		debounce(val + 1)
	}

	const handleChange = (e) => {
		const value = parseInt(e.target.value)
		if (value < 1) return
		setVal(value)
		debounce(value)
	}

	const handleDelete = () => {
		deleteCart.mutate({ produkId: productId, varianId, id }, {
			onSuccess: () => toastSuccess("Berhasil menghapus item"),
			onError: () => toastError("Gagal menghapus item")
		})
	}

	return (
		<div className="flex items-center gap-2 border p-2 px-4 rounded-full">
			{ match(val <= 1)
				.with(true, () => (
					<button onClick={handleDelete}>
						<FaRegTrashAlt size={ 14 } className="text-black" />
					</button>
				))
				.otherwise(() => (
					<button onClick={handleMin}>
						<FaMinus size={ 14 } className="text-black" />
					</button>
				)) }
			<input onChange={handleChange} type="text" value={val} className="focus:outline-none text-center text-black w-[40px]" />
			<button onClick={handlePlus}>
				<FaPlus size={ 14 } className="text-black" />
			</button>
		</div>
	)
}

export default function CartTable() {
	const { data } = useGetCartList()

	return (
		<div className="flex flex-col gap-4">
			{ match(Array.isArray(data?.response))
				.with(true, () => data.response.map(v => (
					<div className="flex border-black/10 border shadow-sm rounded p-5 items-start gap-4" key={ v.id }>
						<input type="checkbox" className="h-5 w-5 rounded" />
						<img src={ `/api/uploaded/${v.varian?.gambar?.nama}` } alt="produk" className="w-[130px] rounded" />
						<div className="flex flex-col w-full">
							<p className="text-sm capitalize">{ v?.varian?.produk?.nama }</p>
							<p className="text-black text-sm font-semibold mb-3 mt-2">Rp. { v?.varian?.harga.toLocaleString() }</p>
							<p className="text-sm capitalize">{ v?.varian?.warna }, { v.varian?.ukuran }</p>
							<div className="flex justify-end items-center gap-4">
								<p>QTY</p>
								<QtyUpdate varianId={ v.varian?.id } productId={ v.varian?.produk?.id } id={ v.id } qty={ v.qty } />
							</div>
						</div>
					</div>
				)))
				.otherwise(() => <Loader />) }
		</div>
	)
}
import { match } from "ts-pattern"
import { useTransaksiMetodeBayar } from "../../../adapters/hooks/useTransaksi"
import Loader from "../../../components/loader"
import { IPaymentMethod } from "../../../interfaces/payment-method"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { requestTransaction } from "../../../adapters/api/transaksi"
import { toastError } from "../../../utils/toast"

export default function MetodeBayar({ pesananGrup, setDisableClose }: { setDisableClose: React.Dispatch<React.SetStateAction<boolean>>, pesananGrup: string }) {
	const { data } = useTransaksiMetodeBayar({ pesananGrup })
	const [selected, setSelected] = useState<IPaymentMethod>(null)

	const handlePayment = () => {
		if(!selected) return
		setDisableClose(true)
		requestTransaction({ pesananGrup, paymentMethod: selected.paymentMethod })
			.then((res) => {
				if(res.response?.paymentUrl) window.open(res.response.paymentUrl, "_blank")
			})
			.catch((e) => {
				console.log(e)
				toastError("Gagal melakukan pembayaran, silahkan coba lagi")
			})
			.finally(() => setDisableClose(false))
	}

	return match(Array.isArray(data?.response?.paymentFee))
		.with(true, () => (
			<div>
				<div className="flex flex-col gap-4 mt-5 md:max-h-[70vh] overflow-y-auto">
					{ data?.response?.paymentFee?.map(v => (
						<button onClick={ () => setSelected(v) } key={ v.paymentMethod } className={ twMerge('flex items-start gap-5 p-2 rounded-md border border-white', v.paymentMethod === selected?.paymentMethod && "bg-zinc-200 border-black/5 shadow-xs") }>
							<img src={ v.paymentImage } className="h-[50px] w-[100px] object-contain" />
							<div className="flex flex-col gap-1 py-2 items-start">
								<p className="font-bold text-black text-sm">{ v.paymentName }</p>
								<p className="font-bold text-zinc-500 text-xs">Fee: Rp. { Number(v.totalFee).toLocaleString() }</p>
							</div>
						</button>
					)) }
				</div>
				<div className="sticky bg-white bottom-0 left-0 right-0 p-6 pb-0">
					<button 
						disabled={ !selected } 
						onClick={ handlePayment}
						className="disabled:cursor-not-allowed disabled:bg-sky-200 bg-sky-500 px-6 block ml-auto text-white rounded shadow py-3 w-[50%]"
					>
						Bayar Sekarang
					</button>
				</div>
			</div>
		))
		.otherwise(() => <Loader />)
}
import { useEffect, useMemo, useState } from "react";
import { IVariantList } from "../../../interfaces/variant";
import { twMerge } from "tailwind-merge";
import { useSelectedProductVarian } from "../../../store/useSelectedProductVarian";

export default function SelectVarian({ varians }: { varians: IVariantList }) {
	const selectedVarian = useSelectedProductVarian(v => v)
	const [selected, setSelected] = useState({ size: '', color: '' });
	const sizes = useMemo(() => Array.from(new Set(varians.map((v) => v.ukuran.toUpperCase()))), [varians]);
	const colors = useMemo(() => Array.from(new Set(varians.map((v) => v.warna.toUpperCase()))), [varians]);

	const onClickSize = (size: string) => () => {
		setSelected(s => ({ ...s, size }))
		if(selected.color) {
			const varian = varians.find(v => v.ukuran.toUpperCase() === size && v.warna.toUpperCase() === selected.color)
			if(varian) {
				useSelectedProductVarian.setState({ ...varian })
			}
		
		}
	}
	const onClickColor = (color: string) => () => {
		setSelected(s => ({ ...s, color }))
		if(selected.size) {
			const varian = varians.find(v => v.ukuran.toUpperCase() === selected.size && v.warna.toUpperCase() === color)
			if(varian) {
				useSelectedProductVarian.setState({ ...varian })
			}
		}
	}

	useEffect(() => {

		if(selectedVarian) {
			setSelected({
				size: selectedVarian.ukuran.toUpperCase(),
				color: selectedVarian.warna.toUpperCase(),
			})
		}

	}, [selectedVarian])

	return (
		<>
			<div className="">
				<h6 className="text-slate-700/75">Warna</h6>
				<div className="w-full mt-1 flex flex-wrap justify-left gap-2">
					{ colors.map((v, i) => <button key={i} onClick={onClickColor(v)} className={twMerge("text-xs whitespace-nowrap p-2 md:text-sm lg:text-md lg:py-1 rounded-md border-2 px-4 border-sky-400/75 ", selected.color === v ? "bg-sky-500 text-white" : "text-sky-500" )}>{v}</button>) }
				</div>
			</div>
			<div className="py-4">
				<h6 className="text-slate-700/75">Ukuran</h6>
				<div className="w-full mt-1 flex flex-wrap justify-left gap-2">
					{ sizes.map((v, i) => <button key={i} onClick={onClickSize(v)} className={twMerge("text-xs whitespace-nowrap p-2 md:text-sm lg:text-md lg:py-1 rounded-md border-2 px-4 border-sky-400/75 ", selected.size === v ? "bg-sky-500 text-white" : "text-sky-500" )}>{v}</button>) }
				</div>
			</div>
		</>
	)
}
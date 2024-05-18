import { forwardRef, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge";

function ImageInput({ label, error, name, defaultImage, ...rest }: { label: string, defaultImage?: string, name: string, error: string }, ref) {
	const [file, setFile] = useState<string>(null)

	const onChange = e => {
		const file = e.target.files[0];
		(rest as any).onChange(e)
		if (file) {
			var reader = new FileReader();
			reader.onload = function (e) {
				setFile(e.target.result as string)
			};
			reader.readAsDataURL(file);
		}
	}

	return (
		<>
			<p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
				{ label }
			</p>
			<div className={twMerge("flex items-center justify-center relative text-blue-600 w-full h-[150px] overflow-hidden p-3 border-dashed border rounded-md", error ? "border-red-600" : ' border-blue-400')}>
				<label htmlFor={ name } className={twMerge('dark:bg-white/10 transition-all inset-0 absolute bg-black/50 text-white flex items-center justify-center font-semibold hover:opacity-100 cursor-pointer', file ? 'opacity-0' : 'opacity-100')}>
					Upload an Image
				</label>
				{ (file || defaultImage) && (
					<img
						className="w-full h-full object-contain rounded-md"
						src={ file ?? defaultImage }
						alt=""
					/>
				) }
			</div>
			<input
				id={ name }
				ref={ ref }
				name={ name }
				type="file"
				accept="image/*"
				className="hidden block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
				{ ...rest }
				onChange={ onChange }
			/>
			{ error && <small className="text-red-600 font-semibold">{ error }</small> }
		</>
	)
}

export default forwardRef(ImageInput)
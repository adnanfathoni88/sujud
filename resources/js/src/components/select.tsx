import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

function Select({ name, label, options, defaultValue, error, ...rest }: { error?: string, name: string, label: string, options: { nama: string, id: number | string }[], defaultValue?: number | string }, ref) {
	return (
		<div>
			<label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
			<div className="mt-2">
				<select 
					ref={ref}
					id={name} 
					name={name} 
					defaultValue={defaultValue}
					className={twMerge(
						"dark:bg-white/10 dark:border-0 block w-full rounded-md border-0 px-2 py-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
						error && "border-red-600 ring-red-600 focus:ring-red-600"
					)}
					{ ...rest } 
				>
					{ options.map(v => (
						<option key={v.id} value={v.id}>{v.nama}</option>
					)) }
				</select>
			</div>
			{ error && <small className="text-red-600 font-semibold ml-1 mt-1">{ error }</small> }
		</div>
	)
}

export default forwardRef(Select)
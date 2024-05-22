import { forwardRef } from "react"

function TextArea({ name, label, defaultValue, required, error, ...rest }: { required?: boolean, error?: string, name: string, label: string, defaultValue?: string }, ref) {
	return (
		<>
			<label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
				{label}
			</label>
			<textarea
				{ ...rest }
				ref={ref}
				name={name}
				defaultValue={defaultValue}
				className="dark:bg-white/10 dark:border-0 text-gray-900 bg-gray-50 border border-blue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required={required === undefined ? true : required}
			/>
			{ error && <small className="text-red-600 font-semibold">{ error }</small> }
		</>
	)
}

export default forwardRef(TextArea)
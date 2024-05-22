import { forwardRef, useId } from "react";
import { twMerge as twm } from "tailwind-merge";

export type TPropsTextGroup = {
	type: 'number' | 'text' | 'email' | 'password' | 'tel',
	name: string;
	title: string,
	required?: boolean,
	errorMessage?: string,
	placeholder?: string,
	defaultValue?: string | number,
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const TextGroup = forwardRef(({ type, title, name, onChange, onBlur, defaultValue, required, errorMessage, placeholder, ...rest }: TPropsTextGroup, ref: React.LegacyRef<HTMLInputElement>) => {
	const id = useId()
	return (
		<div>
			<label htmlFor={ id } className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
				{ title }
			</label>
			<div className="mt-2">
				<input
					ref={ref}
					id={ id }
					name={ name }
					type={ type }
					onBlur={ onBlur }
					required={ required }
					onChange={ onChange }
					placeholder={placeholder}
					defaultValue={defaultValue}
					className={ twm("text-medium block w-full outline-none rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-white/10 dark:text-zinc-400 dark:border-bodydark dark:shadow-[none]", errorMessage ? ' text-red-600 ring-red-300 focus:ring-red-600' : ' text-gray-900 ring-gray-300 focus:ring-indigo-600') }
					{ ...rest }
				/>
			</div>
			{ errorMessage && <small className="text-red-600 font-semibold">{errorMessage}</small> }
		</div>
	)
})

export default TextGroup;

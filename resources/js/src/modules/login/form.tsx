import { LuLoader2 } from "react-icons/lu";
import { LoginSchema } from "./schema";
import { useForm } from "react-hook-form";
import TextGroup from "../../components/text-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { toastError } from "../../utils/toast";
import { useState } from "react";

export default function FormLogin() {
	const [loading, setLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		}
	})

	const onSubmit = async (data: any) => {
		try {
			setLoading(true)
			await api.post('/auth/login', data)
			window.location.reload()
		} catch (error) {
			toastError('Invalid credentials')
		} finally {
			setLoading(false)
		}
	}

	return (
		<form className="space-y-6" action="#" method="POST" onSubmit={ handleSubmit(onSubmit) }>
			<TextGroup
				required
				type="email"
				title="Email address"
				errorMessage={ errors.email?.message }
				{ ...register('email') }
			/>
			<TextGroup
				required
				type="password"
				title="Password"
				errorMessage={ errors.password?.message }
				{ ...register('password') }
			/>
			<div>
				<button
					type="submit"
					disabled={loading}
					className="flex w-full justify-center rounded-md bg-first px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-first items-center disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Sign in { loading && <LuLoader2 className="text-white animate-spin ml-2 -mb-[2px]" />}
				</button>
			</div>
		</form>
	)
}
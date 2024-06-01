import { LuLoader2 } from "react-icons/lu";
import { LoginSchema } from "./schema";
import { useForm } from "react-hook-form";
import TextGroup from "../../components/text-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { toastError } from "../../utils/toast";
import { useState } from "react";

export default function FormLogin() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            const res = await api.post("/auth/login", data);
            if (
                res.data?.response?.role === 1 ||
                res.data?.response?.role === 3
            ) {
                return window.location.replace("/admin/category");
            }
            return window.location.reload();
        } catch (error) {
            toastError("Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextGroup
                required
                type="email"
                title="Email"
                errorMessage={errors.email?.message}
                {...register("email")}
            />
            <TextGroup
                required
                type="password"
                title="Password"
                errorMessage={errors.password?.message}
                {...register("password")}
            />
            <div>
                <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full py-2 justify-center rounded-md bg-sky-500 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Sign in{" "}
                    {loading && (
                        <LuLoader2 className="text-white animate-spin ml-2 -mb-[2px]" />
                    )}
                </button>
            </div>
        </form>
    );
}

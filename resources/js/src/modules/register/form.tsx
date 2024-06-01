import { LuLoader2 } from "react-icons/lu";
import { RegisterSchema } from "./schema";
import { useForm } from "react-hook-form";
import TextGroup from "../../components/text-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { toastError } from "../../utils/toast";
import { useState } from "react";

export default function FormRegister() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            nomor: "",
            password: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            await api.post("/auth/register", { nama: data.name, ...data });
            window.location.reload();
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
                type="text"
                title="Nama"
                errorMessage={errors.name?.message}
                {...register("name")}
            />
            <TextGroup
                required
                type="tel"
                title="Nomor whatsapp"
                errorMessage={errors.nomor?.message}
                {...register("nomor")}
                placeholder="+62"
            />
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
                    className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Sign up{" "}
                    {loading && (
                        <LuLoader2 className="text-white animate-spin ml-2 -mb-[2px]" />
                    )}
                </button>
            </div>
        </form>
    );
}

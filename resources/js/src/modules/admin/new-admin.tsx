import { Button, DialogPanel, DialogTitle } from "@headlessui/react";
import CategoryModal from "../../components/modal";
import TextGroup from "../../components/text-group";
import TextArea from "../../components/textarea";
import { FormEvent, useRef, useState } from "react";
import { useAddAdmin } from "../../adapters/hooks/useAdmin";
import { toastError, toastSuccess } from "../../utils/toast";
import Textarea from "../../components/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddAdminSchema, TAddAdminSchema } from "./schema";

export default function NewAdmin() {
    const [open, setOpen] = useState(false);
    const adminAdd = useAddAdmin();
    // const formRef = useRef<HTMLFormElement | undefined>();

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(AddAdminSchema),
        defaultValues: {
            nama: "",
            email: "",
            nomor: "",
            password: "",
        },
    });

    const onSubmit = (data: any) => {
        // console.log(data as TAddAdminSchema);
        adminAdd.mutate(data as TAddAdminSchema, {
            onSuccess: () => {
                toastSuccess("Berhasil menambahkan admin");
                setOpen(false);
            },
            onError: () => toastError("Failed add new product"),
        });
    };

    return (
        <CategoryModal
            open={open}
            title="Buat Admin"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
                <DialogTitle
                    as="h3"
                    className="text-base/7 font-semibold text-black dark:text-white"
                >
                    Admin
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextGroup
                        required
                        type="text"
                        title="Nama"
                        errorMessage={errors.nama?.message}
                        {...register("nama")}
                    />
                    <TextGroup
                        required
                        type="email"
                        title="Email"
                        errorMessage={errors.nama?.message}
                        {...register("email")}
                    />
                    <TextGroup
                        required
                        type="password"
                        title="Password"
                        errorMessage={errors.password?.message}
                        {...register("password")}
                    />
                    <TextGroup
                        required
                        type="text"
                        title="Nomor"
                        errorMessage={errors.nomor?.message}
                        {...register("nomor")}
                    />

                    {/* <TextArea
                        label="Alamat"
                        error={errors.alamat?.message}
                        {...register("alamat")}
                    /> */}
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="block ml-auto items-center gap-2 rounded-md bg-first py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </DialogPanel>
        </CategoryModal>
    );
}

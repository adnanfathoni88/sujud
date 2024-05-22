import { Button, DialogPanel, DialogTitle } from "@headlessui/react";
import CategoryModal from "../../components/modal";
import TextGroup from "../../components/text-group";
import TextArea from "../../components/textarea";
import { FormEvent, useRef, useState } from "react";
import { useUpdateAdmin } from "../../adapters/hooks/useAdmin";
import { toastError, toastSuccess } from "../../utils/toast";
import Textarea from "../../components/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TUpdateAdminSchema, UpdateAdminSchema } from "./schema";
import Icon from "../../components/icon";
import Select from "../../components/select";

export default function EditAdmin({ admin }: { admin: any }) {
    const [open, setOpen] = useState(false);
    const [selectedRoleId, setRoleId] = useState(admin.role_id);
    const adminUpdate = useUpdateAdmin();

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(UpdateAdminSchema),
        defaultValues: {
            role_id: admin.role_id,
        },
    });

    const onSubmit = (data: any) => {
        adminUpdate.mutate(
            { id: admin.id, role_id: data.role_id },
            {
                onError: () => toastError("Gagal update admin"),
                onSuccess: () => {
                    setOpen(false);
                    toastSuccess("Berhasil update admin");
                },
            }
        );
    };

    const handleRoleId = () => (e: any) => {
        setRoleId(e.target.value);
        setValue("role_id", e.target.value);
    };

    return (
        <CategoryModal
            open={open}
            title="Buat Admin"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            Trigger={
                <button onClick={() => setOpen(true)}>
                    <Icon nama={"edit"} />
                </button>
            }
        >
            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
                <DialogTitle
                    as="h3"
                    className="text-base/7 font-semibold text-black dark:text-white"
                >
                    Edit Admin
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* dropdown */}
                    <div className="mt-3">
                        <label htmlFor="role_id">Role</label>
                        <select
                            {...register("role_id")}
                            onChange={handleRoleId()}
                            name="role_id"
                            className=" mt-1 dark:bg-white/10 dark:border-0 block w-full rounded-md border-0 px-2 py-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                            {admin.role_id === 1 ? (
                                <option value="1">Admin</option>
                            ) : (
                                <option value="2">User</option>
                            )}
                            <option value="1">Admin</option>
                            <option value="2">User</option>
                        </select>
                    </div>
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

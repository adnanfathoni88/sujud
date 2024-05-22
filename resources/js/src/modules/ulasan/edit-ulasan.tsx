import { Button, DialogPanel, DialogTitle } from "@headlessui/react";
import CategoryModal from "../../components/modal";
import TextGroup from "../../components/text-group";
import TextArea from "../../components/textarea";
import { FormEvent, useRef, useState } from "react";
import { useAddCategory } from "../../adapters/hooks/useCategory";
import { toastError, toastSuccess } from "../../utils/toast";
import Textarea from "../../components/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUpdateUlasanSchema, UpdateUlasanSchema } from "./schema";
import Icon from "../../components/icon";
import { useEditUlasan } from "../../adapters/hooks/useUlasan";
import { useParams } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { IBaseUlasan } from "../../interfaces/ulasan";

export default function EditUlasan({ ulasan }: { ulasan: IBaseUlasan }) {
    const ulasanEdit = useEditUlasan();
    const { produkId } = useParams({ strict: false });
    const { varianId } = useParams({ strict: false });

    const [open, setOpen] = useState(false);
    const [selectedStar, setSelectedStar] = useState(ulasan.rating);
    const formRef = useRef<HTMLFormElement | undefined>();

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(UpdateUlasanSchema),
        defaultValues: {
            konten: ulasan.konten,
            rating: selectedStar ?? ulasan.rating,
        },
    });

    // handle star
    const handleStar = (value: number) => {
        setSelectedStar(value);
        setValue("rating", value);
    };

    const onSubmit = (data: any) => {
        // conso
        ulasanEdit.mutate(
            {
                ...data,
                produkId: Number(produkId),
                varianId: Number(varianId),
                ulasanId: ulasan.id,
            } as TUpdateUlasanSchema & {
                produkId: number;
                varianId: number;
                ulasanId: number;
            },
            {
                onError: () => toastError("Gagal update ulasan"),
                onSuccess: () => {
                    setOpen(false);
                    toastSuccess("Sukses memperbarui ulasan");
                },
            }
        );
    };

    return (
        <CategoryModal
            open={open}
            title="Edit"
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
                    Ulasan
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextArea
                        required
                        label="konten"
                        error={errors.konten?.message}
                        {...register("konten")}
                    />
                    <div className="mt-2">
                        <h4>Rating</h4>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => handleStar(i)}
                                    className={`text-xl ${
                                        selectedStar >= i
                                            ? "text-yellow-400"
                                            : "text-gray-400"
                                    }`}
                                >
                                    <Icon nama={"star"} />
                                </button>
                            ))}
                        </div>
                    </div>
                    <input type="hidden" {...register("rating")} />

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

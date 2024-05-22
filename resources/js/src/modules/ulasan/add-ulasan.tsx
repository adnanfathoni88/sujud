import { Button, DialogPanel, DialogTitle } from "@headlessui/react";
import CategoryModal from "../../components/modal";
import TextGroup from "../../components/text-group";
import TextArea from "../../components/textarea";
import { FormEvent, useRef, useState } from "react";
import { useAddCategory } from "../../adapters/hooks/useCategory";
import { toastError, toastSuccess } from "../../utils/toast";
import Textarea from "../../components/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddUlasanSchema, TAddUlasanSchema } from "./schema";
import Icon from "../../components/icon";
import { useAddUlasan } from "../../adapters/hooks/useUlasan";
import { useParams } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export default function NewUlasan() {
    const ulasan = useAddUlasan();
    const { produkId } = useParams({ strict: false });
    const { varianId } = useParams({ strict: false });

    const [open, setOpen] = useState(false);
    const [selectedStar, setSelectedStar] = useState(0);
    const formRef = useRef<HTMLFormElement | undefined>();
    const ulasanAdd = useAddUlasan();

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(AddUlasanSchema),
        defaultValues: {
            konten: "",
            rating: selectedStar,
        },
    });

    // handle star
    const handleStar = (value: number) => {
        setSelectedStar(value);
        setValue("rating", value);
    };

    const onSubmit = (data: any) => {
        ulasan.mutate(
            {
                ...data,
                produkId: Number(produkId),
                varianId: Number(varianId),
            } as TAddUlasanSchema & { produkId: number; varianId: number },
            {
                onError: () => toastError("Failed add new ulasan"),
                onSuccess: () => {
                    setOpen(false);
                    toastSuccess("Success add new ulasan");
                },
            }
        );
    };

    return (
        <CategoryModal
            open={open}
            title="Buat Ulasan"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
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

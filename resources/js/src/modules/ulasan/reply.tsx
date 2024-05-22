import { Button, DialogPanel, DialogTitle } from "@headlessui/react";
import { IVariant } from "../../interfaces/variant";
import Modal from "../../components/modal";
import { useParams } from "@tanstack/react-router";
import { useState } from "react";
import TextGroup from "../../components/text-group";
import ImageInput from "../../components/image-input";
import Select from "../../components/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditVarianById } from "../../adapters/hooks/useVarian";
import { toastError, toastSuccess } from "../../utils/toast";
import Icon from "../../components/icon";

export default function Reply({ parentId }: { parentId: number }) {
    const { produkId } = useParams({ strict: false });
    const { varianId } = useParams({ strict: false });

    const [open, setOpen] = useState(false);

    return (
        <Modal
            open={open}
            title="Buat Kategori"
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            Trigger={
                <button onClick={() => setOpen(true)}>
                    <Icon nama={"reply"} />
                </button>
            }
        >
            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 dark:bg-boxdark-2">
                <DialogTitle
                    as="h3"
                    className="text-base/7 mb-5 font-semibold text-black dark:text-white"
                >
                    Balas Ulasan
                </DialogTitle>
            </DialogPanel>
        </Modal>
    );
}

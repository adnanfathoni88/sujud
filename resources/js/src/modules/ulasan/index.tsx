import { twMerge } from "tailwind-merge";
import { P, match } from "ts-pattern";
import { CiStar, CiTrash } from "react-icons/ci";
import { toastError, toastSuccess } from "../../utils/toast";
import {
    UseGetUlasanList,
    useDeleteUlasanById,
} from "../../adapters/hooks/useUlasan";
import { Link, useParams } from "@tanstack/react-router";
import Icon from "../../components/icon";
import { convertISODateToCustomFormat } from "../../utils/toast";
import Reply from "./reply";
import Swal from "sweetalert2";
import NewUlasan from "./add-ulasan";
import EditUlasan from "./edit-ulasan";
import Loader from "../../components/loader";

const UlasanModule: React.FC = () => {
    const { produkId } = useParams({ strict: false });
    const { varianId } = useParams({ strict: false });
    const deleteUlasan = useDeleteUlasanById();

    const { data } = UseGetUlasanList(produkId, varianId);

    const handleDelete = (ulasanId: number) => {
        Swal.fire({
            text: "Apa anda ingin menghapus ulasan ini?",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUlasan.mutate(
                    {
                        produkId: Number(produkId),
                        varianId: Number(varianId),
                        ulasanId: ulasanId,
                    },
                    {
                        onSuccess: () =>
                            toastSuccess("Ulasan berhasil dihapus"),
                        onError: () => toastError("Gagal menghapus ulasan"),
                    }
                );
            }
        });
    };

    return (
        <>
            <div className="mb-4">
                <NewUlasan />
            </div>

            <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <h4 className="mb-6 text-xl font-bold text-black dark:text-white">
                    Ulasan
                </h4>

                <div className="overflow-x-auto">
                    <div className="align-middle">
                        <table className="min-w-[100%]">
                            <thead>
                                <tr>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        No.
                                    </th>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        Tanggal
                                    </th>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        User
                                    </th>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        Konten
                                    </th>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        Rating
                                    </th>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {match([
                                    Boolean(data),
                                    Array.isArray(data?.response?.data),
                                ])
                                    .with([true, true], () =>
                                        data?.response.data.map((c, key) => (
                                            <tr
                                                key={c.id}
                                                className="align-top"
                                            >
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    {key + 1}
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    {convertISODateToCustomFormat(
                                                        c.created_at
                                                    )}
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    {c.user_id}
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    {c.konten}
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        {Array.from({
                                                            length: c.rating,
                                                        }).map((_, index) => (
                                                            <div
                                                                key={index}
                                                                className="text-yellow-400"
                                                            >
                                                                <Icon
                                                                    nama={
                                                                        "star"
                                                                    }
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    <div className="flex justify-start items-center gap-3 cursor-pointer">
                                                        <Reply
                                                            parentId={c.id}
                                                        ></Reply>
                                                        <EditUlasan
                                                            ulasan={c}
                                                        />
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    c.id
                                                                )
                                                            }
                                                        >
                                                            <Icon
                                                                nama={"trash"}
                                                            />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                    .otherwise(() => (
                                        <tr>
                                            <td
                                                colSpan={6}
                                                className="text-center py-5"
                                            >
                                                <Loader />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UlasanModule;

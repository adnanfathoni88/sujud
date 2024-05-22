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

                <div className="flex flex-col">
                    <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                #
                            </h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Tanggal
                            </h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                User
                            </h5>
                        </div>
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Konten
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Rating
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Aksi
                            </h5>
                        </div>
                    </div>
                    {data?.response.data.map((c, key) => (
                        <div className="grid grid-cols-4 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden font-medium  dark:text-white sm:block">
                                    {key + 1}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden font-medium  dark:text-white sm:block">
                                    {convertISODateToCustomFormat(c.created_at)}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden font-medium  dark:text-white sm:block">
                                    {c.user_id}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="hidden font-medium  dark:text-white sm:block">
                                    {c.konten}
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                {Array.from({ length: c.rating }).map(
                                    (_, index) => (
                                        <div
                                            key={index}
                                            className="text-yellow-400"
                                        >
                                            <Icon nama={"star"} />
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="flex justify-center items-center gap-3 p-2.5 xl:p-5 cursor-pointer">
                                <Reply parentId={c.id}></Reply>
                                <button onClick={() => handleDelete(c.id)}>
                                    <Icon nama={"trash"} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UlasanModule;

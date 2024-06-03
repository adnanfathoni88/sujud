import {
    useDeleteAdminById,
    useGetAdminList,
} from "../../adapters/hooks/useAdmin";
import { twMerge } from "tailwind-merge";
import { match } from "ts-pattern";
import { CiTrash } from "react-icons/ci";
import Loader from "../../components/loader";
import { toastError, toastSuccess } from "../../utils/toast";
import Icon from "../../components/icon";
import NewAdmin from "./new-admin";
import EditAdmin from "./edit-admin";
import Swal from "sweetalert2";

const CategoryListModule: React.FC = () => {
    const { data } = useGetAdminList();
    const adminDelete = useDeleteAdminById();

    const handleDelete = (id: number) => {
        Swal.fire({
            text: "Apa anda ingin menghapus admin ini?",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                adminDelete.mutate(id, {
                    onSuccess: () => toastSuccess("Admin berhasil dihapus"),
                    onError: () => toastError("Gagal menghapus admin"),
                });
            }
        });
    };

    return (
        <>
            <div className="mb-4">
                <NewAdmin />
            </div>
            <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <h4 className="mb-6 text-xl font-bold text-black dark:text-white">
                    Data User
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
                                        Nama
                                    </th>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        Email
                                    </th>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        Nomor
                                    </th>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        Alamat
                                    </th>
                                    <th className="p-4 whitespace-nowrap text-left">
                                        Role
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
                                                    {c.nama}
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    {c.email}
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    {c.nomor}
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    {c.alamat}
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    {c.role_id === 1 ? (
                                                        <div>Admin</div>
                                                    ) : (
                                                        <div>User</div>
                                                    )}
                                                </td>
                                                <td className="py-3 px-4 whitespace-nowrap">
                                                    <div className="flex justify-start items-center gap-3 cursor-pointer">
                                                        {/* <EditAdmin admin={c} /> */}
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    c.id
                                                                )
                                                            }
                                                        >
                                                            <CiTrash />
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

export default CategoryListModule;

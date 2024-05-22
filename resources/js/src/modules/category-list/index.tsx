import {
    useDeleteCategoryById,
    useGetCategoryList,
} from "../../adapters/hooks/useCategory";
import { twMerge } from "tailwind-merge";
import { match } from "ts-pattern";
import { CiTrash } from "react-icons/ci";
import Loader from "../../components/loader";
import { toastError, toastSuccess } from "../../utils/toast";
import NewCategory from "./new-category";
import UpdateCategory from "./update-category";

const CategoryListModule: React.FC = () => {
    const { data } = useGetCategoryList();
    const deleteCategory = useDeleteCategoryById();

    const handleDelete = (id: number) => () =>
        deleteCategory.mutate(
            { id },
            {
                onSuccess: () => toastSuccess("Kategori berhasil dihapus"),
                onError: () => toastError("Gagal menghapus kategori"),
            }
        );

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
                    <h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">
                        Daftar Kategori
                    </h4>
                    <div className="sm:mt-0 ml-auto mt-4">
						<NewCategory />
					</div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                No.
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Nama
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Action
                            </h5>
                        </div>
                    </div>
                    {match(Array.isArray(data?.response))
                        .with(true, () =>
                            data?.response.map((c, key) => (
                                <div
                                    className={twMerge(
                                        "grid grid-cols-3 sm:grid-cols-5",
                                        key !== data.response.length - 1 &&
                                            "border-b border-stroke dark:border-strokedark"
                                    )}
                                    key={key}
                                >
                                    <div className="flex items-center justify-start p-2.5 xl:p-5">
                                        <p className="text-black dark:text-white">
                                            {key + 1}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                                        <p className="text-black dark:text-white">
                                            {c.nama}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-3.5 p-2.5 xl:p-5">
                                        <UpdateCategory
                                            nama={c.nama}
                                            id={c.id}
                                        />
                                        <button
                                            className="hover:text-primary"
                                            onClick={handleDelete(c.id)}
                                        >
                                            <CiTrash size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                        .with(false, () => <Loader />)
                        .exhaustive()}
                </div>
            </div>
        </>
    );
};

export default CategoryListModule;

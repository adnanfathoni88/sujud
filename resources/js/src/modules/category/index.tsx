import { useGetCategoryList } from "../../adapters/hooks/useCategoy";
import { Link } from "@tanstack/react-router";
import SideBar from "../../components/sidebar";
import CategoryDeleteModule from "./category-delete";

const CategoryModul: React.FC = () => {
    const { data } = useGetCategoryList();

    if (!Array.isArray(data?.response)) {
        return <div>Data is not available or not in expected format</div>;
    }

    return (
        <>
            <SideBar />
            <div className="main p-6  bg-slate-200/75 h-screen">
                <div className=" bg-white p-10  rounded-xl mb-6 mx-4 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-700">
                        Kategori
                    </h2>
                    <Link to={"/category/add"}>
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-sm ">
                            Tambah
                        </button>
                    </Link>
                </div>

                <div className="overflow-x-auto rounded-xl mx-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.response.map((item: any) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">{item.nama}</td>
                                    <td>
                                        <Link to={"/category/edit/" + item.id}>
                                            <button className="bg-yellow-300 text-white px-6 py-2 rounded-md hover:bg-yellow-400">
                                                Edit
                                            </button>
                                        </Link>
										<CategoryDeleteModule item={item} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CategoryModul;

import { useGetCategoryList } from "../../adapters/hooks/useCategoy";
import { Link } from "@tanstack/react-router";

const CategoryModul: React.FC = () => {
    const { data } = useGetCategoryList();

    if (!data || !Array.isArray(data.response)) {
        return <div>Data is not available or not in expected format</div>;
    }

    return (
        <>
            <div className="container mx-auto">
                <p className="text-cyan-600">Category</p>
                <hr />

                {console.log(data.response)}

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                        <Link
                                            to={"/category/delete/" + item.id}
                                        >
                                            <button className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600 mx-1">
                                                Hapus
                                            </button>
                                        </Link>
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

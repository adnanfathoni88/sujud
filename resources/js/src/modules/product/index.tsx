import ButtonSwitch from "../../components/button-switch";
import { useGetProductList } from "../../adapters/hooks/useProducts";
import SideBar from "../../components/sidebar";
import { Link } from "@tanstack/react-router";

const ProductModule: React.FC = () => {
    const { data } = useGetProductList();

    if (!data || !Array.isArray(data.response.data)) {
        return <div>Data is not available or not in expected format</div>;
    }

    console.log(data.response.data);

    return (
        <>
            <SideBar />
            <div className="main p-6  bg-slate-200/75 h-screen">
                <div className=" bg-white p-10  rounded-xl mb-6 mx-4 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-700">Produk</h2>
                    <Link to={"/product/add"}>
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
                                    Kode
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.response.data.map((item: any) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">{item.kode}</td>
                                    <td className="px-6 py-4">{item.nama}</td>
                                    <td className="px-6 py-4">
                                        {item.kategori_id}
                                    </td>
                                    <td>
                                        <button className="bg-yellow-300 text-white px-6 py-2 rounded-md hover:bg-yellow-400">
                                            Edit
                                        </button>
                                        <button className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600 mx-1">
                                            Hapus
                                        </button>
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

export default ProductModule;

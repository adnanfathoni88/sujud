import SideBar from "../../../components/sidebar";
import { useGetCategoryList } from "../../../adapters/hooks/useCategoy";
import FormAddProduct from "./form";

export default function ProductAddModule() {
	const { data } = useGetCategoryList()

    return (
        <>
            <SideBar />
            <div className="main p-6 bg-slate-200/75 h-screen">
                <div className=" bg-white p-10  rounded-xl mb-6 mx-4 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-700">
                        Tambah Produk
                    </h2>
                </div>
                <div className="bg-white p-10 rounded-xl mb-6 mx-4">
                    { Array.isArray(data?.response) && <FormAddProduct category={data?.response} /> }
                </div>
            </div>
        </>
    );
}

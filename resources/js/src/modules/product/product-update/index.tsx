import SideBar from "../../../components/sidebar";
import { useGetCategoryList } from "../../../adapters/hooks/useCategoy";
import FormAddProduct from "./form";
import { useParams } from "@tanstack/react-router";
import { useGetProductById } from "../../../adapters/hooks/useProducts";

export default function ProductAddModule() {
	const id = useParams({ strict: false })?.id
	const { data } = useGetProductById({ id })

    return (
        <>
            <SideBar />
            <div className="main p-6 bg-slate-200/75 h-screen">
                <div className=" bg-white p-10  rounded-xl mb-6 mx-4 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-700">
                        Update Produk
                    </h2>
                </div>
                <div className="bg-white p-10 rounded-xl mb-6 mx-4">
                    { data?.response && <FormAddProduct product={data?.response} /> }
                </div>
            </div>
        </>
    );
}

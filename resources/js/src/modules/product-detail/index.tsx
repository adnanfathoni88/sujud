import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
    useDeleteProductById,
    useGetProductById,
} from "../../adapters/hooks/useProducts";
import { useGetVariantList } from "../../adapters/hooks/useVarian";
import Loader from "../../components/loader";
import { match } from "ts-pattern";
import UpdateProduct from "../product-list/update-product";
import { CiTrash } from "react-icons/ci";
import { toastError, toastSuccess } from "../../utils/toast";
import VarianUpdate from "./varian-update";
import VarianAdd from "./varian-add";
import VarianDelete from "./varian-delete";

export default function ProductDetailModule() {
    const { productId } = useParams({ strict: false });
    const { data } = useGetProductById({ id: productId });
    const varians = useGetVariantList({ productId });
    const deleteProduct = useDeleteProductById();
    const navigate = useNavigate({ from: "current" });
    const handleDelete = (id: number) => () =>
        deleteProduct.mutate(
            { id },
            {
                onSuccess: () => {
                    navigate({ to: "/admin/produk" });
                    toastSuccess("Produk berhasil dihapus");
                },
                onError: () => toastError("Gagal menghapus produk"),
            }
        );

    console.log(data);

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 h-fit shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
                    <h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">
                        Detail Produk
                    </h4>
                    {Boolean(data?.response) && (
                        <div className="flex gap-3 items-center">
                            <UpdateProduct product={data?.response} />
                            <button
                                className="hover:text-primary"
                                onClick={handleDelete(data?.response?.id)}
                            >
                                <CiTrash size={20} />
                            </button>
                        </div>
                    )}
                </div>
                <div className="mt-6">
                    {match(Boolean(data?.response))
                        .with(true, () => (
                            <dl className="">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">
                                        Nama Produk
                                    </dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        {data.response.nama}
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">
                                        Kode Produk
                                    </dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        {data.response.kode}
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">
                                        Kategori
                                    </dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        {data.response.kategori.nama}
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">
                                        Deskripsi
                                    </dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        {data.response.deskripsi}
                                    </dd>
                                </div>
                            </dl>
                        ))
                        .otherwise(() => (
                            <Loader />
                        ))}
                </div>
                <div className="flex items-center justify-between mt-6 flex-col sm:flex-row">
                    <h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">
                        Daftar Varian
                    </h4>
                    <div className="flex gap-3 items-center">
                        <VarianAdd productId={productId} />
                    </div>
                </div>
                <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {match(Array.isArray(varians?.data?.response))
                        .with(true, () =>
                            varians.data.response.map((varian) => (
                                <div
                                    key={varian.id}
                                    className="overflow-hidden bg-black rounded-md bg-body/5 border border-body/15 shadow-sm shadow-body/5"
                                >
                                    <img
                                        src={`/api/uploaded/${varian?.gambar?.nama}`}
                                        className="object-cover w-full h-80"
                                    />
                                    <div className="p-4">
                                        <p className="text-lg font-semibold text-black">
                                            {varian.warna} - {varian.ukuran}
                                        </p>
                                        <table className="table-auto">
                                            <tbody>
                                                <tr className="align-top">
                                                    <td className="text-black text-sm pt-4">
                                                        Stok
                                                    </td>
                                                    <td className="text-black text-sm pt-4 pl-5">
                                                        {varian.stok.toLocaleString()}
                                                        .
                                                    </td>
                                                </tr>
                                                <tr className="align-top">
                                                    <td className="text-black text-sm pt-4">
                                                        Harga Asli
                                                    </td>
                                                    <td className="text-black text-sm pt-4 pl-5">
                                                        Rp.{" "}
                                                        {varian.harga.toLocaleString()}
                                                    </td>
                                                </tr>
                                                <tr className="align-top">
                                                    <td className="text-black text-sm pt-4">
                                                        Potongan Harga
                                                    </td>
                                                    <td className="text-black text-sm pt-4 pl-5">
                                                        {varian.harga_diskon
                                                            ? `Rp. ${varian.harga_diskon.toLocaleString()}`
                                                            : "-"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="flex justify-between gap-3">
                                            <Link
                                                to={`/admin/produk/${productId}/varian/${varian.id}/ulasan`}
                                            >
                                                <button
                                                    type="submit"
                                                    className="mt-7 ml-auto block text-white bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                                                >
                                                    Ulasan
                                                </button>
                                            </Link>
                                            <VarianUpdate
                                                productId={productId}
                                                varian={varian}
                                            />
                                            <VarianDelete
                                                productId={productId}
                                                varian={varian}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                        .otherwise(() => (
                            <div className="col-span-3">
                                <Loader />
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

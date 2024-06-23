import { Link } from "@tanstack/react-router";
import { useGetProductList } from "../../../adapters/hooks/useProducts";

export default function ProductLanding() {
    const { data } = useGetProductList({ q: undefined, page: undefined });

    return (
        <div className="py-10 md:px-20 bg-white px-10">
            <div className="flex justify-between text-center">
                <h2 className="text-sky-600 text-2xl font-semibold md:text-3xl">
                    Koleksi Produk
                </h2>
                <Link
                    to="/shop?page=1"
                    className="flex items-center justify-between bg-custom-yellow hover:bg-yellow-500 text-white px-6 rounded-md"
                >
                    Lihat
                </Link>
            </div>
            <div className="py-4 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-4">
                {Array.isArray(data?.response.data) &&
                    data?.response.data.slice(0, 8).map((p, index) => (
                        <div
                            className="bg-white w-full rounded-md relative border-slate-100 border-2 p-4 shadow-sm group"
                            key={p.id}
                        >
                            <div className="h-56 mb-1 md:h-64">
                                <div className="bg-white h-full rounded-sm p-2 group-hover:scale-105">
                                    <img
                                        className="h-full object-contain w-full object-top rounded-md"
                                        src={`/api/uploaded/${p.varian.gambar.nama}`}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <h3 className="text-slate-600 capitalize my-5 text-md px-1 flex gap-2">
                                {p.nama}
								<span className="badge text-xs bg-sky-500 w-fit p-1 rounded text-white">{p?.kategori?.nama}</span>
                            </h3>
                            <p className="text-black text-md px-1 font-semibold">
                                Rp {p.varian.harga.toLocaleString()}
                            </p>
                            <Link
                                to={`/detail/${p.id}/shop`}
                                className="absolute inset-0"
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}

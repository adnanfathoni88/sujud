import { FaChevronRight } from "react-icons/fa";
import { useNavigate, useParams } from "@tanstack/react-router";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import { useGetProductById } from "../../../adapters/hooks/useProducts";
import { useSelectedProductVarian } from "../../../store/useSelectedProductVarian";
import { useEffect } from "react";
import SelectVarian from "./select-varian";
import Ulasan from "./ulasan";
import { useAddToCart } from "../../../adapters/hooks/useCart";
import { toastError, toastSuccess } from "../../../utils/toast";
import { useProfileStore } from "../../../store/useProfile";
import { match } from "ts-pattern";
import { getUlasanByProdukId } from "../../../adapters/api/ulasan";
import { useState } from "react";
import Icon from "../../../components/icon";

const DetailShopPageModule: React.FC = () => {
    const navigate = useNavigate();
    const profile = useProfileStore((s) => s?.id);
    const param = useParams({ strict: false });
    const addToCart = useAddToCart();
    const { data } = useGetProductById({ id: param?.id });
    const varian = useSelectedProductVarian((s) => s);
    const setVarian = useSelectedProductVarian((s) => s.setValue);
    const [ulasan, setUlasan] = useState(0);

    // get ulasan by produk id
    useEffect(() => {
        const fetchUlasan = async () => {
            try {
                const { response } = await getUlasanByProdukId({
                    produkId: param?.id,
                });

                // average rating
                const ulasan = response.data;
                if (ulasan.length > 0) {
                    const totalRating = ulasan.reduce(
                        (sum, ulasan) => sum + ulasan.rating,
                        0
                    );
                    const averageRating = totalRating / ulasan.length;
                    setUlasan(averageRating);
                } else {
                    console.log("Tidak ada ulasan untuk produk ini.");
                }
            } catch (error) {
                console.error("Error fetching ulasan", error);
            }
        };

        if (param?.id) {
            fetchUlasan();
        }
    }, [param?.id]);

    useEffect(() => {
        const varian = data?.response?.varians?.[0];
        if (varian) setVarian(varian);
    }, [data?.response]);

    // rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            stars.push(
                <div className="text-yellow-300">
                    <Icon key={i} nama="star" />
                </div>
            );
        }
        return stars;
    };

    const handleNext = () => {
        const index = data?.response?.varians?.findIndex(
            (v) => v.id === varian?.id
        );
        if (index >= data?.response?.varians?.length - 1)
            return setVarian(data.response.varians[0]);
        if (index === -1) return setVarian(data.response.varians[0]);
        const next = data?.response?.varians?.[index + 1];
        if (next) setVarian(next);
    };

    const handlePrev = () => {
        const index = data?.response?.varians?.findIndex(
            (v) => v.id === varian?.id
        );
        if (index < 1)
            return setVarian(
                data.response.varians[data.response.varians.length - 1]
            );
        if (index === -1)
            return setVarian(
                data.response.varians[data.response.varians.length - 1]
            );
        const prev = data?.response?.varians?.[index - 1];
        if (prev) setVarian(prev);
    };

    const handleSaveCart = () => {
        if (!profile) return navigate({ to: "/login" });
        if (!varian) return;
        if (!data?.response) return;
        if (varian?.stok < 1) return;
        if (addToCart.isPending) return;
        addToCart.mutate(
            { varianId: varian.id, produkId: data?.response?.id, qty: 1 },
            {
                onSuccess: () => toastSuccess("Berhasil menambahkan"),
                onError: (err: any) =>
                    toastError(
                        err?.response?.data?.response ?? "Gagal menambahkan"
                    ),
            }
        );
    };

    return (
        <div className="bg-white">
            <Navbar />
            <div className="pt-[72px] md:px-20 lg:px-30 mb-16">
                {/* detail */}
                <div className=" bg-white flex flex-col md:flex-row py-8 px-4 lg:px-10 gap-4 lg:gap-8 pt-16">
                    <div className="h-125 bg-slate-200/50 md:w-[60%] lg:w-[50%] flex flex-col justify-center items-center p-3 rounded-lg">
                        <div className="w-full h-100 p-6 flex justify-center">
                            {varian?.gambar?.nama && (
                                <img
                                    className="rounded h-96 object-contain"
                                    src={`/api/uploaded/${varian?.gambar?.nama}`}
                                    alt="image"
                                />
                            )}
                        </div>
                        {/* button next prev */}
                        <div className="flex justify-center gap-3 w-full mt-6">
                            <button
                                className=" bg-custom-yellow hover:bg-yellow-400 text-white py-2 px-5 rounded-md"
                                onClick={handlePrev}
                            >
                                <FaChevronRight className="rotate-180" />
                            </button>
                            <button
                                className=" bg-custom-yellow hover:bg-yellow-400 text-white py-2 px-5 rounded-md"
                                onClick={handleNext}
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    {data?.response && (
                        <div className="md:w-[40%] lg:w-[50%] p-6">
                            <div className="flex justify-between">
                                <div>
                                    <h4 className="font-semibold text-2xl lg:text-4xl text-slate-800 capitalize">
                                        {data?.response?.kategori?.nama}{" "}
                                        {data?.response?.nama}
                                    </h4>
                                    {match([
                                        Boolean(varian?.harga),
                                        varian?.harga_diskon > 0,
                                    ])
                                        .with([true, true], () => (
                                            <div className="flex gap-2 items-start mt-2">
                                                <p className="text-sm text-slate-400 line-through">
                                                    Rp.{" "}
                                                    {varian?.harga.toLocaleString()}
                                                </p>
                                                <p className="text-xl font-semibold text-slate-500">
                                                    Rp.{" "}
                                                    {(
                                                        varian?.harga -
                                                        varian?.harga_diskon
                                                    ).toLocaleString()}
                                                </p>
                                            </div>
                                        ))
                                        .with([true, false], () => (
                                            <p className="text-xl font-semibold text-slate-500 mt-2">
                                                Rp.{" "}
                                                {varian?.harga.toLocaleString()}
                                            </p>
                                        ))
                                        .otherwise(() => null)}
                                </div>
                                <p className="text-md text-slate-700 md:text-xl mt-4">
                                    {varian?.stok > 0
                                        ? `Stok ${varian?.stok.toLocaleString()}`
                                        : "Stok habis"}
                                </p>
                            </div>
                            <div className="flex gap-4 mt-2 mb-3">
                                {renderStars(ulasan)}
                            </div>
                            <div className="mt-10">
                                {Array.isArray(data?.response?.varians) && (
                                    <SelectVarian
                                        varians={data.response.varians}
                                    />
                                )}
                            </div>
                            <div className="pt-12">
                                <button
                                    onClick={handleSaveCart}
                                    className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-md disabled:bg-sky-200 disabled:cursor-not-allowed"
                                    disabled={varian?.stok < 1}
                                >
                                    Tambah Keranjang
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {/* deskripsi */}
                <div className="py-6 px-4 md:px-10">
                    <h2 className="text-sky-600 text-3xl font-semibold mb-2">
                        Deskripsi
                    </h2>
                    <pre className="text-slate-500 font-satoshi">
                        {data?.response?.deskripsi ?? ""}
                    </pre>
                </div>
                {/* ulasan */}
                <div className="py-6 px-4 md:px-10">
                    <Ulasan productId={param?.id} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailShopPageModule;

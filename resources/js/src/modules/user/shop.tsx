import Footer from "../../components/footer";
import Icon from "../../components/icon";
import Navbar from "../../components/navbar";

const ShopPageModule: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className=" bg-white pt-[72px] md:px-10 lg:px-20">
                {/* banner header*/}
                <div className="p-4 md:py-16">
                    <div className="relative w-full mx-auto h-fit">
                        <img
                            className="w-full"
                            src="/img/shop/banner/header-banner-1.png"
                            alt=""
                        />
                        <div className="absolute bottom-[-15px] md:bottom-[-20px] right-5">
                            <button className="bg-yellow-300 rounded-lg text-yellow-800 px-1 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400 mx-2">
                                <Icon nama={"panah-kiri"} />
                            </button>
                            <button className="bg-yellow-300 rounded-lg text-yellow-800 px-1 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400 ">
                                <Icon nama={"panah-kanan"} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* shop by categories */}
                <div className="p-4 pb-8">
                    <h2 className="text-sky-500 text-xl md:text-3xl mb-3 font-semibold">
                        Kategori Produk
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
                        <div className="flex justify-center items-center gap-4 shadow-lg rounded-lg py-4 ">
                            <img
                                className="w-24 lg:w-30  h-30 object-top sm:w-20 sm:h-30 lg:h-40 object-cover rounded-md"
                                src="/img/produk/sajadah-geometry.png"
                                alt=""
                            />
                            <div>
                                <h2 className="text-sky-400 text-xl md:text-2xl font-medium mb-1">
                                    Sajadah
                                </h2>
                                <button className="bg-yellow-300 rounded-lg text-yellow-800 font-semibold px-6 py-1 hover:bg-yellow-400">
                                    Lihat
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4 shadow-lg rounded-lg py-4 ">
                            <img
                                className="w-24 lg:w-30  h-30 object-top sm:w-20 sm:h-30 lg:h-40 object-cover rounded-md"
                                src="/img/produk/krudung.jpg"
                                alt=""
                            />
                            <div>
                                <h2 className="text-sky-400 text-xl md:text-2xl font-medium mb-1">
                                    Krudung
                                </h2>
                                <button className="bg-yellow-300 rounded-lg text-yellow-800 font-semibold px-6 py-1 hover:bg-yellow-400">
                                    Lihat
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4 shadow-lg rounded-lg py-4 ">
                            <img
                                className="w-24 lg:w-30  h-30 object-top sm:w-20 sm:h-30 lg:h-40 object-cover rounded-md"
                                src="/img/produk/dress.png"
                                alt=""
                            />
                            <div>
                                <h2 className="text-sky-400 text-xl md:text-2xl font-medium mb-1">
                                    Dress
                                </h2>
                                <button className="bg-yellow-300 rounded-lg text-yellow-800 font-semibold px-6 py-1 hover:bg-yellow-400">
                                    Lihat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* promo  */}
                <div className="p-4 md:py-10">
                    <h2 className="text-sky-500 text-xl md:text-3xl mb-3 font-semibold">
                        Promo Terbaru
                    </h2>
                    <img
                        className="w-full"
                        src="/img/shop/banner/top-product-banner.png"
                        alt=""
                    />
                </div>

                {/* produk */}
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sky-500 text-xl md:text-3xl mb-3 font-semibold">
                            Produk Terbaru
                        </h2>
                        <p className="font-medium">Lihat Semua</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full py-4 flex justify-center gap-2 lg:py-6">
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-3 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400">
                            <Icon nama={"panah-kiri"} />
                        </button>
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-4 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400">
                            1
                        </button>
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-4 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400">
                            2
                        </button>
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-4 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400">
                            ...
                        </button>
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-3 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400 ">
                            <Icon nama={"panah-kanan"} />
                        </button>
                    </div>
                </div>

                {/* produk */}
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sky-500 text-xl md:text-3xl mb-3 font-semibold">
                            Produk Terlaris
                        </h2>
                        <p className="font-medium">Lihat Semua</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>

                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                        <div className="p-4 w-full bg-white shadow-md">
                            <div className="bg-slate-200/75 w-full h-fit p-4">
                                <img
                                    className="w-full max-h-26 md:max-h-32 lg:max-h-40 object-contain"
                                    src="/img/produk/sajadah-geometry.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="flex gap-1 text-yellow-300 text-sm py-2">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <h2 className="text-slate-500 text-base font-semibold">
                                    Sajadah Geometry
                                </h2>
                                <p className="text-slate-400">Rp 100.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full py-4 flex justify-center gap-2 lg:py-6">
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-3 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400">
                            <Icon nama={"panah-kiri"} />
                        </button>
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-4 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400">
                            1
                        </button>
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-4 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400">
                            2
                        </button>
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-4 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400">
                            ...
                        </button>
                        <button className="bg-yellow-300 rounded-lg text-yellow-800 px-3 py-3 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400 ">
                            <Icon nama={"panah-kanan"} />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShopPageModule;

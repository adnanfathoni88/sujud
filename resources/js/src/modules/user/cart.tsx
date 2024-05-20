import Footer from "../../components/footer";
import Icon from "../../components/icon";
import Navbar from "../../components/navbar";

const CartShopPageModule: React.FC = () => {
    return (
        <div className="bg-white h-screen">
            <Navbar />
            <div className="pt-[72px] md:px-10 lg:px-20 mb-16 h-full">
                <div className="lg:grid lg:grid-cols-3 px-4 py-10 gap-4 h-full">
                    <div className="col-span-2 mb-4">
                        <h2 className="font-semibold text-3xl md:py-4 md:mb-4">
                            Keranjang
                        </h2>
                        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                            <div className="flex flex-col">
                                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
                                    <div className="p-2.5 xl:p-5">
                                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                                            Produk
                                        </h5>
                                    </div>
                                    <div className="p-2.5 text-center xl:p-5">
                                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                                            Harga
                                        </h5>
                                    </div>
                                    <div className="p-2.5 text-center xl:p-5">
                                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                                            Kuantitas
                                        </h5>
                                    </div>
                                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                                            Total
                                        </h5>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                        <div className="flex-shrink-0"></div>
                                        <p className="hidden font-medium text-black dark:text-white sm:block">
                                            Sajdah Cordoba
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                                        <p className="font-medium text-black dark:text-white">
                                            100.000
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                                        <p className="font-medium text-meta-3">
                                            2
                                        </p>
                                    </div>

                                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                        <p className="font-medium text-black dark:text-white">
                                            200.000
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
                                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                        <div className="flex-shrink-0"></div>
                                        <p className="hidden font-medium text-black dark:text-white sm:block">
                                            Sajdah Cordoba
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                                        <p className="font-medium text-black dark:text-white">
                                            100.000
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                                        <p className="font-medium text-meta-3">
                                            2
                                        </p>
                                    </div>

                                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                        <p className="font-medium text-black dark:text-white">
                                            200.000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-700 w-full text-white rounded-md flex flex-col justify-between p-6">
                        <div>
                            <h4 className="text-2xl font-semibold">
                                Ringkasan
                            </h4>
                            <div className="flex justify-between mt-4">
                                <p className="text-sm lg:text-lg opacity-50">
                                    Sajadah Cordoba
                                </p>
                                <p className="text-sm lg:text-lg opacity-50">
                                    Rp 200.000
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm lg:text-lg opacity-50">
                                    Sajadah Geometry
                                </p>
                                <p className="text-sm lg:text-lg opacity-50">
                                    Rp 200.000
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mt-2 mb-4">
                                <p className="text-sm lg:text-lg font-semibold">
                                    Sub Total
                                </p>
                                <p className="text-sm lg:text-lg font-semibold">
                                    Rp 400.000
                                </p>
                            </div>
                            <button className="bg-sky-600 py-4 w-full rounded-md">
                                <span className="font-bold md:text-xl">
                                    Check Out
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartShopPageModule;

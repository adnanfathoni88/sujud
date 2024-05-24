import Footer from "../../../components/footer";
import Icon from "../../../components/icon";
import Navbar from "../../../components/navbar";
import CartTable from "./cart-table";

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
                        <CartTable />
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

import Footer from "../../components/footer";
import Icon from "../../components/icon";
import Navbar from "../../components/navbar";
import TextGroup from "../../components/text-group";

const PaymentModule: React.FC = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="pt-[72px] md:px-10 lg:px-20 mb-16 h-full">
                <div className="lg:grid lg:grid-cols-3 px-4 py-10 lg:gap-2 h-full">
                    <div className="col-span-2 md:pr-4">
                        <h2 className="font-semibold text-3xl md:py-4 md:mb-4">
                            Pembayaran
                        </h2>
                        <form className="p-4">
                            <div>
                                <h2 className="text-xl font-semibold mb-3">
                                    Informasi Pribadi
                                </h2>
                                <h4 className="text-md">Nama</h4>
                                <TextGroup type={"text"} name={""} title={""} />
                                <h4 className="text-md">Email</h4>
                                <TextGroup
                                    type={"email"}
                                    name={""}
                                    title={""}
                                />
                                <h4 className="text-md">Nomor</h4>
                                <TextGroup type={"text"} name={""} title={""} />
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-semibold mb-3">
                                    Alamat
                                </h2>
                                <h4 className="text-md">Provinsi</h4>
                                <TextGroup type={"text"} name={""} title={""} />
                                <h4 className="text-md">Kabupaten</h4>
                                <TextGroup type={"text"} name={""} title={""} />
                                <h4 className="text-md">Kecamatan</h4>
                                <TextGroup type={"text"} name={""} title={""} />
                                <h4 className="text-md">Desa</h4>
                                <TextGroup type={"text"} name={""} title={""} />
                                <h4 className="text-md">Jalan</h4>
                                <TextGroup type={"text"} name={""} title={""} />
                                <h4 className="text-md">Kode Pos</h4>
                                <TextGroup type={"text"} name={""} title={""} />
                            </div>
                        </form>
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
                                    Lanjut Bayar
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PaymentModule;

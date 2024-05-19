import Footer from "../../components/footer";
import Icon from "../../components/icon";
import Navbar from "../../components/navbar";

const DetailShopPageModule: React.FC = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="pt-[72px] md:px-10 lg:px-20 mb-16">
                {/* detail */}
                <div className=" bg-white flex flex-col md:flex-row py-8 px-4 lg:px-10  gap-4  lg:gap-8 pt-16">
                    <div className="bg-slate-200/50 md:w-[60%] lg:w-[50%] flex flex-col justify-center items-center p-3 rounded-md">
                        <div className="w-full flex p-6 justify-center">
                            <img
                                className="text-center"
                                src="/img/produk/sajadah-geometry.png"
                                alt=""
                            />
                        </div>
                        <div className="flex gap-2">
                            <img
                                className="text-center w-16 h-24"
                                src="/img/produk/sajadah-geometry.png"
                                alt=""
                            />
                            <img
                                className="text-center w-16 h-24"
                                src="/img/produk/sajadah-geometry.png"
                                alt=""
                            />
                            <img
                                className="text-center w-16 h-24"
                                src="/img/produk/sajadah-geometry.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="md:w-[40%] lg:w-[50%]">
                        <h4 className="font-semibold text-2xl lg:text-4xl text-slate-800">
                            Sajadah Geometry
                        </h4>
                        <p className="text-md text-slate-700 md:text-xl">
                            Rp 100.000
                        </p>
                        <div className="flex gap-4 mt-1 mb-3">
                            <div className="flex text-yellow-300 gap-1">
                                <Icon nama={"star"} />
                                <Icon nama={"star"} />
                                <Icon nama={"star"} />
                                <Icon nama={"star"} />
                                <Icon nama={"star"} />
                            </div>
                            <span className="text-slate-500/50">
                                (90 terjual)
                            </span>
                        </div>
                        <div>
                            <h6 className="text-slate-700/75">Warna</h6>
                            <div className="w-full mt-1 flex flex-wrap justify-left gap-2">
                                <button className="w-[25%] lg:w-[20%] border-sky-400/75 md:text-sm lg:text-md lg:py-1 bg-sky-500 text-white rounded-md border-2 px-4">
                                    Hitam
                                </button>
                                <button className="w-[25%] lg:w-[20%] border-sky-400/75 md:text-sm lg:text-md lg:py-1 rounded-md border-2 px-4">
                                    Putih
                                </button>
                                <button className="w-[25%] lg:w-[20%] border-sky-400/75 md:text-sm lg:text-md lg:py-1 rounded-md border-2 px-4">
                                    Merah
                                </button>
                                <button className="w-[25%] lg:w-[20%] border-sky-400/75 md:text-sm lg:text-md lg:py-1 rounded-md border-2 px-4">
                                    Biru
                                </button>
                            </div>
                        </div>
                        <div className="py-4">
                            <h6 className="text-slate-700/75">Ukuran</h6>
                            <div className="w-full mt-1 flex flex-wrap justify-left gap-2">
                                <button className="w-[25%] lg:w-[20%] border-sky-400/75 md:text-sm lg:text-md lg:py-1 rounded-md border-2 px-4">
                                    XL
                                </button>
                                <button className="w-[25%] lg:w-[20%] border-sky-400/75 md:text-sm lg:text-md lg:py-1 rounded-md border-2 px-4">
                                    L
                                </button>
                                <button className="w-[25%] lg:w-[20%] border-sky-400/75 md:text-sm lg:text-md lg:py-1 rounded-md border-2 px-4">
                                    M
                                </button>
                                <button className="w-[25%] lg:w-[20%] border-sky-400/75 md:text-sm lg:text-md lg:py-1 rounded-md border-2 px-4">
                                    S
                                </button>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="w-full bg-sky-500 text-white py-3 rounded-md">
                                Tambah Keranjang
                            </button>
                        </div>
                    </div>
                </div>
                {/* deskripsi */}
                <div className="py-6 px-4 md:px-10">
                    <h2 className="text-sky-600 text-2xl font-semibold mb-2">
                        Deskripsi
                    </h2>
                    <span className="text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus quam numquam dolorum quod reiciendis quaerat
                        quis! Sint hic sed neque, ex porro totam aliquid,
                        necessitatibus est vero eum excepturi voluptas modi
                        consectetur quaerat nisi inventore deserunt possimus
                        repellat ab veniam eligendi officiis id! Accusamus
                        possimus nesciunt quod rem praesentium vel! Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Facilis
                        dolor obcaecati nulla et. Explicabo molestias optio
                        dolores quidem alias praesentium laboriosam voluptate,
                        ducimus consequuntur, inventore aliquam quod ad enim
                        perspiciatis accusamus nihil officiis est, beatae
                        voluptatibus eaque. Repudiandae asperiores adipisci
                        beatae odit!
                    </span>
                </div>
                {/* ulasan */}
                <div className="py-6 px-4 md:px-10">
                    <h2 className="text-sky-600 text-2xl font-semibold mb-2">
                        Ulasan
                    </h2>
                    <div>
                        <div className="rounded-md border-2 border-slate-200/75 p-4 flex gap-4 items-center mb-2">
                            <img
                                className="w-18 object-cover h-18 rounded-full"
                                src="/img/person/person-3.png"
                                alt=""
                            />
                            <div className="w-full">
                                <h6 className="font-semibold text-md md:text-xl">
                                    Lorem
                                </h6>
                                <div className="flex text-yellow-300 gap-1 text-sm">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <p className="text-base md:text-lg leading-tight opacity-75 mt-2 md:mt-1">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit ...
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md border-2 border-slate-200/75 p-4 flex gap-4 items-center mb-2">
                            <img
                                className="w-18 object-cover h-18 rounded-full"
                                src="/img/person/person-3.png"
                                alt=""
                            />
                            <div className="w-full">
                                <h6 className="font-semibold text-md md:text-xl">
                                    Lorem
                                </h6>
                                <div className="flex text-yellow-300 gap-1 text-sm">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <p className="text-base md:text-lg leading-tight opacity-75 mt-2 md:mt-1">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit ...
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md border-2 border-slate-200/75 p-4 flex gap-4 items-center mb-2">
                            <img
                                className="w-18 object-cover h-18 rounded-full"
                                src="/img/person/person-3.png"
                                alt=""
                            />
                            <div className="w-full">
                                <h6 className="font-semibold text-md md:text-xl">
                                    Lorem
                                </h6>
                                <div className="flex text-yellow-300 gap-1 text-sm">
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                    <Icon nama={"star"} />
                                </div>
                                <p className="text-base md:text-lg leading-tight opacity-75 mt-2 md:mt-1">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit ...
                                </p>
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
                {/* produk */}
                <div className="p-6 md:px-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sky-600 text-2xl font-semibold mb-2">
                            Produk Serupa
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailShopPageModule;

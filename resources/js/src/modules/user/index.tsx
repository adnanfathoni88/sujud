import Footer from "../../components/footer";
import Icon from "../../components/icon";
import Navbar from "../../components/navbar";

const LandingPageModule: React.FC = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <div className="relative bg-sky-300 h-screen mx-auto">
                <div className="px-4 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:mx-10 md:mx-24">
                    <div className="w-full h-screen text-white flex flex-col justify-center text-center">
                        <h2 className="font-semibold text-5xl mb-2">
                            SUJUD COMPANY
                        </h2>
                        <p className="mb-6 text-white/75">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Blanditiis explicabo omnis dignissimos quidem
                            eveniet dolores nobis, illum, quaerat exercitationem
                            sit doloremque.
                        </p>
                        <div className="w-full">
                            <button className="bg-custom-yellow px-2 py-3 rounded-full w-36 hover:bg-yellow-500">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full bg-sky-300 hidden sm:hidden md:flex md:justify-center items-end">
                        <img
                            className="max-w-full h-[80%] object-contain"
                            src="img/person/model-sujud-1.png"
                            alt="Model Sujud"
                        />
                    </div>
                </div>
                <div className="flex-col relative bg-white">
                    <div className="absolute w-full flex justify-center top-[-100px]">
                        <div className="bg-white w-[90%] lg:w-[80%] p-4 rounded-xl h-fit shadow-md lg:py-8">
                            <h2 className="font-bold text-center text-sky-600 text-2xl mb-6 lg:text-4xl">
                                Top Sale
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-2 px-2 md:gap-4 lg:px-10 lg:gap-5">
                                <div className="shadow-sm border-2 border-slate-100 w-full sm:w-34 flex-auto rounded-sm p-4 flex justify-center mb-4 py-4">
                                    <div>
                                        <img
                                            className="h-24 md:h-36"
                                            src="img/produk/cordoba.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-start flex flex-col justify-center">
                                        <h5 className="text-custom-yellow md:text-xl">
                                            Sajadah
                                        </h5>
                                        <h2 className="text-sky-600 text-xl font-semibold md:text-3xl">
                                            Cordoba
                                        </h2>
                                    </div>
                                </div>
                                <div className="shadow-sm border-2 border-slate-100 w-full sm:w-34 flex-auto rounded-sm p-4 flex justify-center mb-4 py-4">
                                    <div>
                                        <img
                                            className="h-24 md:h-36"
                                            src="img/produk/cordoba.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-start flex flex-col justify-center">
                                        <h5 className="text-custom-yellow md:text-xl">
                                            Sajadah
                                        </h5>
                                        <h2 className="text-sky-600 text-xl font-semibold md:text-3xl">
                                            Cordoba
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[350px] text-center pb-20 p-4 mx-4 sm:pt-[180px] md:pt-[300px]">
                        <h2 className="text-sky-600 text-2xl font-semibold mb-4 lg:text-4xl">
                            Kenapa Harus Kami?
                        </h2>
                        <div className="flex justify-center flex-col gap-4 md:flex-row md:flex-wrap md:gap-6 ">
                            {/* card */}
                            <div className="rounded-md border-2 border-slate-200/75 p-6 md:w-[40%]">
                                <div className="flex justify-center">
                                    <h4 className="text-custom-yellow text-start mx-4 text-2xl font-semibold ">
                                        Spiritual
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-slate-500/75 mt-4 text-justify">
                                        Our products are designed with full
                                        respect for spiritual values, helping
                                        you get closer to your faith.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-md border-2 border-slate-200/75 p-6 md:w-[40%]">
                                <div className="flex justify-center">
                                    <h4 className="text-custom-yellow text-start mx-4 text-2xl font-semibold ">
                                        Happiness
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-slate-500/75 mt-4 text-justify">
                                        The quality of our products aims to
                                        provide happiness in every ritual of
                                        your worship.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-md border-2 border-slate-200/75 p-6 md:w-[40%]">
                                <div className="flex justify-center">
                                    <h4 className="text-custom-yellow text-start mx-4 text-2xl font-semibold ">
                                        Improvment
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-slate-500/75 mt-4 text-justify">
                                        We are always trying to improve our
                                        products in order to provide a better
                                        experience for our customers
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-md border-2 border-slate-200/75 p-6 md:w-[40%]">
                                <div className="flex justify-center">
                                    <h4 className="text-custom-yellow text-start mx-4 text-2xl font-semibold ">
                                        Professional
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-slate-500/75 mt-4 text-justify">
                                        Our commitment to professionalism
                                        ensures you receive high-quality
                                        products and satisfactory service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative py-6 bg-white">
                    <img
                        className="w-full md:h-96 md:object-cover"
                        src="/img/background/sujud-1.jpg"
                        alt=""
                    />
                    <div className="absolute px-6 top-0 text-white flex flex-col w-full h-full text-center justify-center ">
                        <h3 className="text-2xl font-semibold mb-2 md:text-5xl">
                            Muslim Active Traveler
                        </h3>
                        <p className=" text-slate-100/75 font-thin md:text-2xl">
                            "Muslim Active Traveler is a travel community that
                            combines worldly exploration with profound spiritual
                            experiences."
                        </p>
                    </div>
                </div>
                <div className="py-10 md:px-20 bg-white">
                    <div className="flex justify-between text-center">
                        <h2 className="text-sky-600 text-2xl font-semibold md:text-3xl">
                            Koleksi Produk
                        </h2>
                        <button className="bg-custom-yellow hover:bg-yellow-400 text-white px-6 rounded-md">
                            Lihat
                        </button>
                    </div>
                    <div className="py-4 md:flex gap-4 lg:gap-6 ">
                        <div className="bg-white shadow-md p-6 mb-4 w-full rounded-lg">
                            <div className="h-56 mb-2 md:h-64">
                                <img
                                    className="h-full object-cover w-full object-top-0 rounded-md"
                                    src="/img/sajadah.png"
                                    alt=""
                                />
                            </div>
                            <h3 className="text-slate-600 text-xl font-semibold">
                                Sajadah
                            </h3>
                            <p className="text-slate-500">Rp 180.000</p>
                        </div>
                        <div className="bg-white shadow-md p-6 mb-4 w-full rounded-lg">
                            <div className="h-56 mb-2 md:h-64">
                                <img
                                    className="h-full object-cover w-full object-top-0 rounded-md"
                                    src="/img/sajadah.png"
                                    alt=""
                                />
                            </div>
                            <h3 className="text-slate-600 text-xl font-semibold">
                                Sajadah
                            </h3>
                            <p className="text-slate-500">Rp 180.000</p>
                        </div>
                        <div className="bg-white shadow-md p-6 mb-4 w-full rounded-lg">
                            <div className="h-56 mb-2 md:h-64">
                                <img
                                    className="h-full object-cover w-full object-top-0 rounded-md"
                                    src="/img/sajadah.png"
                                    alt=""
                                />
                            </div>
                            <h3 className="text-slate-600 text-xl font-semibold">
                                Sajadah
                            </h3>
                            <p className="text-slate-500">Rp 180.000</p>
                        </div>
                    </div>
                </div>
                <div className="px-8 py-10 lg:px-40 bg-white">
                    <h2 className="font-bold text-center text-sky-600 text-2xl mb-4 lg:text-3xl">
                        Telah diliput oleh:
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-16">
                        <div>
                            <img
                                className="h-full w-full object-contain"
                                src="/img/logo/trans-7.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-full w-full object-contain"
                                src="/img/logo/liputan-6.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-full w-full object-contain"
                                src="/img/logo/media-indonesia.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-full w-full object-contain"
                                src="/img/logo/tribun-news.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-full w-full object-contain"
                                src="/img/logo/radar-jogja.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-full w-full object-contain"
                                src="/img/logo/kumparan.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* footer */}
                <Footer />
            </div>
        </div>
    );
};

export default LandingPageModule;

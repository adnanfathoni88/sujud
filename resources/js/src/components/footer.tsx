import Icon from "./icon";
function Footer() {
    return (
        <div>
            <div className="w-full bg-sky-600 text-white text-center py-10 grid grid-row-2 md:grid-cols-4 md:px-10">
                <div className="mx-auto md:w-[50%] my-auto">
                    <img src="/img/logo/sujud.png" alt="" />
                </div>

                <div className="hidden mx-auto md:flex md:flex-col">
                    <div className="text-start flex flex-col gap-1">
                        <h5 className="font-semibold md:text-lg ">
                            Hubungi Kami
                        </h5>
                        <span className="text-white/75 text-sm md:text-md">
                            lorem@gmail.com
                        </span>
                        <span className="text-white/75 text-sm md:text-md">
                            Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa
                            Yogyakarta
                        </span>
                        <span className="text-white/75 text-sm md:text-md">
                            0813-9371-9073
                        </span>
                    </div>
                </div>
                <div className="md:flex md:flex-col mx-auto hidden">
                    <div className="text-start flex flex-col">
                        <h5 className="font-semibold md:text-lg">
                            Koleksi Produk
                        </h5>
                        <span className="text-white/75 font-sm md:text-md">
                            Sajadah
                        </span>
                        <span className="text-white/75 font-sm md:text-md">
                            Mukena
                        </span>
                        <span className="text-white/75 font-sm md:text-md">
                            Hijab
                        </span>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="flex gap-2 mt-8">
                        <div className="bg-sky-700 w-fit h-fit py-3 px-4 rounded-full md:py-2 md:px-3">
                            <span className="text-xl md:text-md">
                                <Icon nama={"instagram"} />
                            </span>
                        </div>
                        <div className="bg-sky-700 w-fit h-fit py-3 px-4 rounded-full md:py-2 md:px-3">
                            <span className="text-xl md:text-md">
                                <Icon nama={"tiktok"} />
                            </span>
                        </div>
                        <div className="bg-sky-700 w-fit h-fit py-3 px-4 rounded-full md:py-2 md:px-3">
                            <span className="text-xl md:text-md">
                                <Icon nama={"facebook"} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-white/50" />
            <div className="w-full text-center bg-sky-600 text-white/50 py-1 text-sm ">
                COPYRIGHT 2024. SUJUD
            </div>
        </div>
    );
}

export default Footer;

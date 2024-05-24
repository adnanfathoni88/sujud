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
                        <span className="mt-5 text-white/75 text-sm md:text-md">
                            <a href="mailto:sujudco@gmail.com">sujudco@gmail.com</a>
                        </span>
                        <span className="mt-3 text-white/75 text-sm md:text-md">
                            Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa
                            Yogyakarta
                        </span>
                        <span className="mt-3 text-white/75 text-sm md:text-md">
							<a href="https://wa.me/+6281226080439">+62 8122-6080-439</a>
                        </span>
                    </div>
                </div>
                <div className="md:flex md:flex-col mx-auto hidden">
                    <div className="text-start flex flex-col gap-1">
                        <h5 className="font-semibold md:text-lg ">
                            Links
                        </h5>
                        <span className="mt-5 text-white/75 text-sm md:text-md">
                            <a href="/shop-all">Shop All</a>
                        </span>
                        <span className="mt-3 text-white/75 text-sm md:text-md">
                            <a href="/register">Register</a>
                        </span>
                        <span className="mt-3 text-white/75 text-sm md:text-md">
                            <a href="/login">Login</a>
                        </span>
                    </div>
                </div>
                <div className="md:flex md:flex-col mx-auto hidden">
                    <div className="text-start flex flex-col gap-1">
                        <h5 className="font-semibold md:text-lg ">
                            Ikuti kami
                        </h5>
                        <span className="mt-5 text-white/75 text-sm md:text-md">
                            <a href="https://instagram.com/" className="flex gap-2 items-center">
								<Icon nama={"instagram"} />
								<span>Instagram</span>
							</a>
                        </span>
                        <span className="mt-3 text-white/75 text-sm md:text-md">
                            <a href="https://tiktok.com/" className="flex gap-2 items-center">
								<Icon nama={"tiktok"} />
								<span>Tiktok</span>
							</a>
                        </span>
                        <span className="mt-3 text-white/75 text-sm md:text-md">
                            <a href="https://facebook.com/" className="flex gap-2 items-center">
								<Icon nama={"facebook"} />
								<span>Facebook</span>
							</a>
                        </span>
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

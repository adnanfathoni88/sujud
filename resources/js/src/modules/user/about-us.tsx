import Footer from "../../components/footer";
import Icon from "../../components/icon";
import Navbar from "../../components/navbar";

const AboutUsModule: React.FC = () => {
    return (
        <div className="bg-white h-full">
            <Navbar />
            <div className="pt-[72px] md:px-26 lg:px-20 h-full">
                <div className="py-20">
                    <div className="text-center w-full text-sky-900 text-4xl font-bold mb-8">
                        SUJUD COMPANY
                    </div>

                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
                        <div className="p-6 text-center shadow-md border-[1px] border-slate-200">
                            <h4 className="text-xl font-semibold">Overview</h4>
                            <hr className="mt-3 pb-2 opacity-25" />
                            <p className="text-slate-400">
                                PT Sujud Global Media (Sujud Group) adalah
                                perusahaan yang memiliki mimpi besar, dimana di
                                dalamnya diisi anak-anak muda yang memiliki
                                semangat tinggi dan energi positif. Sujud
                                memiliki beberapa produk berupa perlengkapan
                                ibadah umat muslim dan juga merambah ke bidang
                                kecantikan atau skincare.
                            </p>
                        </div>
                        <div className="p-6 text-center shadow-md border-[1px] border-slate-200">
                            <h4 className="text-xl font-semibold">Visi</h4>
                            <hr className="mt-3 pb-2 opacity-25" />
                            <p className="text-slate-400">
                                Menjadi perusahaan global melalui produk market
                                fit dengan pelayanan TERBAIK di dunia
                            </p>
                        </div>
                        <div className="border-gray-300 p-6 shadow-md border-[1px] border-slate-200">
                            <h4 className="text-xl font-semibold text-center">
                                Misi
                            </h4>
                            <hr className="mt-3 pb-2 opacity-25" />
                            <ul className="list-decimal list-inside text-slate-400	">
                                <li>
                                    Menerapkan spiritual company di lingkungan
                                    perusahaan
                                </li>
                                <li>
                                    Membangun tim yang bahagia, berintegritas,
                                    produktif dan professional
                                </li>
                                <li>
                                    Mempercepat pertumbuhan perusahaan dengan
                                    KAIZEN
                                </li>
                                <li>
                                    Memberi manfaat POSITIF untuk semua
                                    stakeholder
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="py-8">
                        <h4 className="text-4xl text-sky-900 text-center font-medium pb-4">
                            Lokasi Toko
                        </h4>
                        <iframe
                            className="w-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.024537214676!2d110.34948307461218!3d-7.787222977275051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a593a2b8ca785%3A0xe08723f96e773afe!2sSujud%20Company!5e0!3m2!1sid!2sid!4v1716487752775!5m2!1sid!2sid"
                            height="300"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUsModule;

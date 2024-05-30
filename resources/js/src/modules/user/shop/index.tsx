import { useGetCategoryList } from "../../../adapters/hooks/useCategory";
import Footer from "../../../components/footer";
import Icon from "../../../components/icon";
import Navbar from "../../../components/navbar";
import ProductList from "./product-list";
import SearchProduct from "./search-product";
import { useEffect, useState } from "react";
import { IProductList } from "../../../interfaces/product";
import FilterProduct from "./filter-product";

const imageLinks = [
    { id: 0, name: "/img/shop/banner/header-banner-1.png" },
    { id: 1, name: "/img/shop/banner/top-product-banner.png" },
];

const ShopPageModule: React.FC = () => {
    const [product, setProduct] = useState<IProductList>([]);
    const [selectedBanner, setSelectedBanner] = useState<{
        id: number;
        name: string;
    }>(imageLinks[0]);

    const onNext = () => {
        if (selectedBanner.id === imageLinks.length - 1)
            return setSelectedBanner(imageLinks[0]);
        return setSelectedBanner(imageLinks[selectedBanner.id + 1]);
    };

    const onPrev = () => {
        if (selectedBanner.id === 0)
            return setSelectedBanner(imageLinks[imageLinks.length - 1]);
        return setSelectedBanner(imageLinks[selectedBanner.id - 1]);
    };

    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            if (selectedBanner.id === imageLinks.length - 1)
                return setSelectedBanner(imageLinks[0]);
            return setSelectedBanner(imageLinks[selectedBanner.id + 1]);
        }, 3000);

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [selectedBanner]);

    return (
        <>
            <div>
                <Navbar />
                <div className=" bg-white pt-[72px] md:px-10 lg:px-20 pb-[150px]">
                    {/* banner header*/}
                    <div className="p-4 md:py-10">
                        <div className="relative w-full mx-auto h-fit">
                            <img
                                className="w-full rounded-lg"
                                src={selectedBanner.name}
                                alt=""
                            />
                            <div className="absolute bottom-[-15px] md:bottom-[-20px] right-5">
                                <button
                                    onClick={onPrev}
                                    className="bg-yellow-300 rounded-lg text-yellow-800 px-1 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400 mx-2"
                                >
                                    <Icon nama={"panah-kiri"} />
                                </button>
                                <button
                                    onClick={onNext}
                                    className="bg-yellow-300 rounded-lg text-yellow-800 px-1 md:px-2 md:py-1 md:text-xl lg:text-2xl hover:bg-yellow-400 "
                                >
                                    <Icon nama={"panah-kanan"} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 pt-[50px]">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-sky-500 text-xl md:text-3xl font-semibold">
                                Daftar Produk
                            </h2>
                            {/* Searchbar */}
                            <div className="flex items-center">
                                <SearchProduct setProduct={setProduct} />
                                <FilterProduct setProduct={setProduct} />
                            </div>
                        </div>
                        <ProductList
                            product={product}
                            setProduct={setProduct}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ShopPageModule;

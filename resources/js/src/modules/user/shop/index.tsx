import { useGetCategoryList } from "../../../adapters/hooks/useCategory";
import Footer from "../../../components/footer";
import Icon from "../../../components/icon";
import Navbar from "../../../components/navbar";
import ProductList from "./product-list";
import SearchProduct from "./search-product";
import { useState } from "react";
import { IProductList } from "../../../interfaces/product";
import FilterProduct from "./filter-product";

const ShopPageModule: React.FC = () => {
	const [product, setProduct] = useState<IProductList>([])

    return (
        <>
            <div>
                <Navbar />
                <div className=" bg-white pt-[72px] md:px-10 lg:px-20 pb-[150px]">
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

                    <div className="p-4 pt-[50px]">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-sky-500 text-xl md:text-3xl font-semibold">
                                Daftar Produk
                            </h2>
							{/* Searchbar */}
							<div className="flex items-center">
								<SearchProduct setProduct={setProduct} />
								<FilterProduct setProduct={setProduct} />
							</div>
                        </div>
						<ProductList product={product} setProduct={setProduct} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ShopPageModule;

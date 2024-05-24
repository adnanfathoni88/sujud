import { useEffect, useMemo, useState } from "react";
import Footer from "../../../components/footer";
import Icon from "../../../components/icon";
import Navbar from "../../../components/navbar";
import CartTable from "./cart-table";
import CheckoutButton from "./checkout-button";
 
const CartShopPageModule: React.FC = () => {
	const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
	const [selectedProduct, setSelectedProduct] = useState<{ id: number, harga: number, harga_diskon: number, varian_id: number, qty: number }[]>([]);
	const subtotal = useMemo(() => {
		return selectedProduct.reduce((acc, curr) => {
			return acc + (curr.harga - curr.harga_diskon) * curr.qty
		}, 0)
	}, [selectedProduct])

	return (
		<div className="bg-white min-h-screen">
			<Navbar />
			<div className="pt-[100px] md:px-10 lg:px-20 h-full">
				<div className="col-span-2 mb-4 max-w-[800px] mx-auto">
					<h2 className="font-semibold text-3xl md:py-4 md:mb-4">
						Keranjang
					</h2>
					<div className="pb-13">
						<CartTable setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} isSelectAll={isSelectAll} />
					</div>
					<div className="p-5 py-10 w-full sticky bg-white bottom-0 border-t border-zinc-300">
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-3">
								<input 
									id="all" 
									type="checkbox" 
									className="h-4 w-4" 
									checked={isSelectAll}
									onChange={() => setIsSelectAll(v => !v)}
								/>
								<label htmlFor="all">Semua</label>
							</div>
							<div className="flex items-center gap-5">
								<div>
									<p className="text-sm">Total Harga</p>
									<p className="text-black font-semibold">Rp. { !isNaN(subtotal) ? subtotal.toLocaleString() : 0  }</p>
								</div>
								<CheckoutButton selectedProduct={selectedProduct} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartShopPageModule;

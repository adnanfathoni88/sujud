import { useGetProductList } from "../../../adapters/hooks/useProducts";
import Loader from "../../../components/loader";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { IProductList } from "../../../interfaces/product";
import { useEffect, useRef, useState } from "react";
import { shopRoute } from "../../../routes/user";
import { useGetUlasanListByProdukId } from "../../../adapters/hooks/useUlasan";
import ProductWithUlasan from "./produk-ulasan";
import { queryClient } from "../../../main";

export default function ProductList({
	product,
	setProduct,
}: {
	product: IProductList;
	setProduct: React.Dispatch<React.SetStateAction<IProductList>>;
}) {
	const search = useSearch({ strict: false });
	const navigate = useNavigate({ from: shopRoute.fullPath });
	const observerRef = useRef<HTMLDivElement>(null);
	const { data, isLoading } = useGetProductList({
		q: search?.q,
		page: search?.page ?? 1,
		kategori_id: search?.kategori_id,
	});
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				if (data?.response?.next_page_url) {
					const nextPage = new URLSearchParams(
						new URL(data?.response?.next_page_url).search
					).get("page");
					const searchParam = new URLSearchParams(search);
					searchParam.set("page", parseInt(nextPage).toString());
					if (search?.q) searchParam.set("q", search.q);
					if (search?.kategori_id)
						searchParam.set("kategori_id", search.kategori_id);
					navigate({ to: `/shop?${searchParam.toString()}` });
				} else {
					observer.disconnect();
				}
			}
		},
		{ rootMargin: "0px 0px 0px 0px" }
	);

	useEffect(() => {
		if (Array.isArray(data?.response?.data)) {
			setProduct((p) => [...p, ...data?.response?.data]);
		}
	}, [data?.response?.data]);

	useEffect(() => {
		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => observer.disconnect();
	}, [observerRef.current]);

	useEffect(() => {
		const searchParam = new URLSearchParams(search);
		searchParam.set("page", "1");
		if (search?.q) searchParam.set("q", search.q);
		if (search?.kategori_id)
			searchParam.set("kategori_id", search.kategori_id);
		navigate({ to: `/shop?${searchParam.toString()}` });

		return () => {
			setProduct([]);
			queryClient.clear();
		};
	}, []);

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 relative">
			{ Array.isArray(product) &&
				product.map((p) => (
					<div
						className="bg-white w-full rounded-md relative border-slate-100 border-2 p-4 shadow-sm group"
						key={ p.id }
					>
						<div className="h-56 mb-2 md:h-64 group-hover:scale-105">
							<div className="bg-white h-full rounded-sm p-2">
								<img
									className="h-full object-contain w-full object-top rounded-md"
									src={ `/api/uploaded/${p.varian.gambar.nama}` }
									alt=""
								/>
							</div>
						</div>
						<div className="py-1">
							<ProductWithUlasan produkId={ p.id } />
						</div>
						<h3 className="text-slate-600 capitalize my-5 text-md px-1 flex gap-2">
							{ p.nama }
							<span className="badge text-xs bg-sky-500 w-fit p-1 rounded text-white">{ p?.kategori?.nama }</span>
						</h3>
						<p className="text-black text-md px-1 font-semibold">
							Rp { p.varian.harga.toLocaleString() }
						</p>
						<Link
							to={ `/detail/${p.id}/shop` }
							className="absolute inset-0"
						/>
					</div>
				)) }
			{ !isLoading && Array.isArray(product) && product.length < 1 && (
				<p className="text-center my-2 mt-10 font-semibold col-span-12">
					Produk tidak ditemukan
				</p>
			) }
			{ Array.isArray(data?.response?.data) && (
				<div
					ref={ observerRef }
					className="z-[99] absolute bottom-0 left-0 right-0"
				/>
			) }
			{ isLoading && (
				<div className="absolute bottom-0 left-0 right-0 h-[50px] pt-[80px]">
					<Loader />
				</div>
			) }
		</div>
	);
}

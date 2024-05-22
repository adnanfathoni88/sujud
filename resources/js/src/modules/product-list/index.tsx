import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDeleteProductById, useGetProductList } from "../../adapters/hooks/useProducts";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import Loader from "../../components/loader";
import { twMerge } from "tailwind-merge";
import { CiTrash } from "react-icons/ci";
import { match } from "ts-pattern";
import { toastError, toastSuccess } from "../../utils/toast";
import UpdateProduct from "./update-product";
import { productRoute } from "../../routes/product-route";

const ProductListModule: React.FC = () => {
	const search = useSearch({ strict: false })
	const navigate = useNavigate({ from: productRoute.fullPath })
	const { data } = useGetProductList({ q: search?.q, page: search?.page});
	const deleteProduct = useDeleteProductById();

    const handleDelete = (id: number) => () =>
        deleteProduct.mutate(
            { id },
            {
                onSuccess: () => toastSuccess("Kategori berhasil dihapus"),
                onError: () => toastError("Gagal menghapus kategori"),
            }
        );

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === "Enter") {
			const q = (e.target as HTMLInputElement).value
			const urlSearchParam = new URLSearchParams()
			urlSearchParam.append("q", q)
			if(search?.page) urlSearchParam.append("page", search.page)
			navigate({ to: `?${urlSearchParam.toString()}` })
		}
	}

	return (
		<>
			<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				<div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
					<h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">Daftar Produk</h4>
					<Link
						to="/admin/produk/add"
						className="rounded-md bg-first py-2 px-4 text-sm font-medium text-white ml-auto"
					>
						Buat Produk
					</Link>
				</div>
				{/* search bar */}
				<div className="flex items-center mb-6">
					<input
						onKeyDown={onKeyDown}
						type="text"
						placeholder="Cari produk (Enter)"
						className={ twMerge(`w-full rounded-md border border-stroke px-4 py-2 text-sm text-black bg-zinc-200 dark:bg-black/40 dark:text-white dark:border-strokedark`) }
					/>
					{/* next prev button */}
					{/* <div className="flex items-center space-x-2 ml-4">
						<button
							onClick={ () => navigate({ to: `?page=${Number(search?.page || 1) - 1}` }) }
							disabled={ search?.page === "1" }
							className={ twMerge(`rounded-md border border-stroke px-4 py-2 text-sm text-black bg-zinc-200 dark:bg-black/40 dark:text-white dark:border-strokedark`, search?.page === "1" && `cursor-not-allowed`) }
						>
							Prev
						</button>
						<button
							onClick={ () => navigate({ to: `?page=${Number(search?.page || 1) + 1}` }) }
							disabled={ !data?.response?.next_page_url }
							className={ twMerge(`rounded-md border border-stroke px-4 py-2 text-sm text-black bg-zinc-200 dark:bg-black/40 dark:text-white dark:border-strokedark`, !data?.response?.next_page_url && `cursor-not-allowed`) }
						>
							Next
						</button>
					</div> */}
				</div>
				<div className="overflow-x-auto">
					<div className="align-middle">
						<table className="min-w-[100%]">
							<thead>
								<tr>
									<th className="p-4 whitespace-nowrap text-left">No.</th>
									<th className="p-4 whitespace-nowrap text-left">Kode</th>
									<th className="p-4 whitespace-nowrap text-left">Thumbnail</th>
									<th className="p-4 whitespace-nowrap text-left">Nama</th>
									<th className="p-4 whitespace-nowrap text-left">Kategori</th>
									<th className="p-4 whitespace-nowrap text-left">Action</th>
								</tr>
							</thead>
							<tbody>
								{ match([Boolean(data), Array.isArray(data?.response?.data)])
									.with([true, true], () => data?.response.data.map((c, key) => (
										<tr key={ c.id } className="align-top">
											<td className="py-3 px-4 whitespace-nowrap">{ key + 1 }</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.kode }</td>
											<td className="py-3 px-4 whitespace-nowrap">
												<img src={ `/api/uploaded/${c?.varian?.gambar?.nama}` } alt="" className="max-w-[150px]" />
											</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.nama }</td>
											<td className="py-3 px-4 whitespace-nowrap">{ c.kategori.nama }</td>
											<td className="py-3 px-4 whitespace-nowrap">
												<div className="flex items-start justify-center space-x-3.5 p-2.5 xl:p-5">
													<Link to={ `/admin/produk/${c.id}` } className="hover:text-primary">
														<IoIosInformationCircleOutline size={ 20 } />
													</Link>
													<UpdateProduct product={ c } />
													<button className="hover:text-primary" onClick={ handleDelete(c.id) }>
														<CiTrash size={ 20 } />
													</button>
												</div>
											</td>
										</tr>
									)))
									.otherwise(() => (
										<tr>
											<td colSpan={ 6 } className="text-center py-5">
												<Loader />
											</td>
										</tr>
									)) }
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductListModule;

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
// @ts-ignore
import Pagination from "../../components/pagination";

const ProductListModule: React.FC = () => {
	const search = useSearch({ strict: false })
	const navigate = useNavigate({ from: productRoute.fullPath })
	const { data } = useGetProductList({ q: search?.q, page: search?.page});
	const deleteProduct = useDeleteProductById();

    const handleDelete = (id: number) => () => deleteProduct.mutate(
		{ id },
		{
			onSuccess: () => toastSuccess("Kategori berhasil dihapus"),
			onError: () => toastError("Gagal menghapus kategori"),
		}
	);


	return (
		<>
			<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				<div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
					<h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">Daftar Produk</h4>
					<Link
						to="/admin/produk/add"
						className="rounded-md bg-first py-2 px-4 text-sm font-medium text-white ml-auto mt-4 sm:mt-0"
					>
						Buat Produk
					</Link>
				</div>
				{/* search bar */}
				<Pagination withSearch={true} navigate={navigate} nextUrl={ data?.response?.next_page_url } />
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

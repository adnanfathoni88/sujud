import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDeleteProductById, useGetProductList } from "../../adapters/hooks/useProducts";
import { Link } from "@tanstack/react-router";
import Loader from "../../components/loader";
import { twMerge } from "tailwind-merge";
import { CiTrash } from "react-icons/ci";
import { match } from "ts-pattern";
import { toastError, toastSuccess } from "../../utils/toast";
import UpdateProduct from "./update-product";

const ProductListModule: React.FC = () => {
	const { data } = useGetProductList();
	const deleteProduct = useDeleteProductById();

	const handleDelete = (id: number) => () => deleteProduct.mutate({ id }, {
		onSuccess: () => toastSuccess("Kategori berhasil dihapus"),
		onError: () => toastError("Gagal menghapus kategori")
	});

	return (
		<>
			<div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				<div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
					<h4 className="text-xl font-semibold text-black dark:text-white me-auto sm:me-0">Daftar Produk</h4>
					<Link
						to="/admin/produk/add"
						className="rounded-md bg-first py-2 px-4 text-sm font-medium text-white"
					>
						Buat Produk
					</Link>
				</div>
				<div className="flex flex-col">
					<div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
						<div className="p-2.5 xl:p-5">
							<h5 className="text-sm font-medium uppercase xsm:text-base">
								Kode
							</h5>
						</div>
						<div className="p-2.5 text-center xl:p-5">
							<h5 className="text-sm font-medium uppercase xsm:text-base">
								Thumbnail
							</h5>
						</div>
						<div className="p-2.5 text-center xl:p-5">
							<h5 className="text-sm font-medium uppercase xsm:text-base">
								Nama
							</h5>
						</div>
						<div className="p-2.5 text-center xl:p-5">
							<h5 className="text-sm font-medium uppercase xsm:text-base">
								Kategori
							</h5>
						</div>
						<div className="p-2.5 text-center xl:p-5">
							<h5 className="text-sm font-medium uppercase xsm:text-base">
								Action
							</h5>
						</div>
					</div>
					{ match([Boolean(data), Array.isArray(data?.response?.data)])
						.with([true, true], () => data?.response.data.map((c, key) => (
							<div
								className={ twMerge("grid grid-cols-3 sm:grid-cols-5", key !== (data.response.data.length - 1) && 'border-b border-stroke dark:border-strokedark') }
								key={ key }
							>
								<div className="flex items-start justify-start p-2.5 xl:p-5">
									<p className="text-black dark:text-white">{ c.kode }</p>
								</div>
								<div className="flex items-start justify-center p-2.5 xl:p-5">
									<img src={ `/api/uploaded/${c.varian.gambar.nama}` } alt="" />
								</div>
								<div className="flex items-start justify-center p-2.5 xl:p-5">
									<p className="text-black dark:text-white">{ c.nama }</p>
								</div>
								<div className="flex items-start justify-center p-2.5 xl:p-5">
									<p className="text-black dark:text-white">{ c.kategori.nama }</p>
								</div>
								<div className="flex items-start justify-center space-x-3.5 p-2.5 xl:p-5">
									<Link to={`/admin/produk/${c.id}`} className="hover:text-primary">
										<IoIosInformationCircleOutline size={20} />
									</Link>
									<UpdateProduct product={ c } />
									<button className="hover:text-primary" onClick={ handleDelete(c.id) }>
										<CiTrash size={ 20 } />
									</button>
								</div>
							</div>
						)))
						.otherwise(() => <Loader />) }
				</div>
			</div>
		</>
	);
};

export default ProductListModule;

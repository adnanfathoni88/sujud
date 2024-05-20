import { IVariant } from "../../interfaces/variant";
import { useDeleteVarianById } from '../../adapters/hooks/useVarian';
import { toastError, toastSuccess } from '../../utils/toast';

export default function VarianDelete({ productId, varian }: { productId: number, varian: IVariant }) {
	const updateVarian = useDeleteVarianById()
	const onDelete = () => {
		updateVarian.mutate({ id: varian.id, productId }, {
			onSuccess: () => toastSuccess("Varian berhasil diupdate"),
			onError: () => toastError("Gagal mengupdate varian")
		})
	}

	return <button onClick={ onDelete } className="rounded-md bg-red-600 py-2 px-4 text-sm font-medium text-white w-full mt-7">Delete</button>
}
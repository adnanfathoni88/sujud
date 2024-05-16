import { useParams } from "@tanstack/react-router";
import { useDeleteCategoryById } from "../../adapters/hooks/useCategoy";
import { useEffect } from "react";
import { toastSuccess } from "../../utils/toast";

export default function CategoryDeleteModule({ item }: { item: { id: string, nama: string } }) {
	const deleteCategory = useDeleteCategoryById()

	const onDelete = () => {
		deleteCategory.mutate({ id: parseInt(item.id) }, {
			onSuccess: () => toastSuccess("Success delete category")
		})
	}

	return (
		<button className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600 mx-1" onClick={onDelete}>
			Hapus
		</button>
	);
}

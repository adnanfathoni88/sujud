import { useEffect } from "react";
import AdminLayout from "../layout/admin-layout";
import CategoryListModule from "../modules/category-list";
import { useLocationUrlId } from "../store/useLocationUrlId";

export default function CategoryListPage() {
	const set = useLocationUrlId(s => s.setValue)

	useEffect(() => { set('category') }, [])

    return (
		<AdminLayout withSearch={true}>
			<CategoryListModule />
		</AdminLayout>
	);
}

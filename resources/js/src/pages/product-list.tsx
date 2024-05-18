import { useEffect } from "react";
import AdminLayout from "../layout/admin-layout";
import { useLocationUrlId } from "../store/useLocationUrlId";
import ProductListModule from "../modules/product-list";

export default function ProductListPage() {
	const set = useLocationUrlId(s => s.setValue)

	useEffect(() => { set('product') }, [])

    return (
		<AdminLayout withSearch={false}>
			<ProductListModule />
		</AdminLayout>
	);
}

import { useEffect } from "react";
import AdminLayout from "../layout/admin-layout";
import ProductAddModule from "../modules/product-add";
import { useLocationUrlId } from "../store/useLocationUrlId";

export default function ProductAddPage() {
	const set = useLocationUrlId(s => s.setValue)

	useEffect(() => { set('product-create') }, [])

    return (
		<AdminLayout withSearch={false}>
			<ProductAddModule />
		</AdminLayout>
	);
}

import { useEffect } from "react";
import AdminLayout from "../layout/admin-layout";
import ProductDetailModule from "../modules/product-detail";
import { useLocationUrlId } from "../store/useLocationUrlId";

export default function ProductDetailPage() {
	const set = useLocationUrlId(s => s.setValue)

	useEffect(() => { set('product-detail') }, [])

	return (
		<AdminLayout withSearch={ false }>
			<ProductDetailModule />
		</AdminLayout>
	);
}
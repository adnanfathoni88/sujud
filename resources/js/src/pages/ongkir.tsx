import { useEffect } from "react";
import AdminLayout from "../layout/admin-layout";
import { useLocationUrlId } from "../store/useLocationUrlId";
import OngkirListModule from "../modules/ongkir-list";

export default function OngkirPage() {
	const set = useLocationUrlId(s => s.setValue)

	useEffect(() => { set('ongkir') }, [])

	return (
		<AdminLayout withSearch={ false }>
			<OngkirListModule />
		</AdminLayout>
	)
}
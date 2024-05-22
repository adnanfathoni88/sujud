import { useEffect } from "react";
import AdminLayout from "../layout/admin-layout";
import { useLocationUrlId } from "../store/useLocationUrlId";
import OngkirDetailModule from "../modules/ongkir-detail";

export default function OngkirDetailPage() {
	const set = useLocationUrlId(s => s.setValue)

	useEffect(() => { set('ongkir') }, [])

	return (
		<AdminLayout withSearch={ false }>
			<OngkirDetailModule />
		</AdminLayout>
	)
}
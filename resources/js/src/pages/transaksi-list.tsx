import { useEffect } from "react";
import AdminLayout from "../layout/admin-layout";
// import TransaksiListModule from "../modules/category-list";
import { useLocationUrlId } from "../store/useLocationUrlId";
import TransaksiListModule from "../modules/transaksi-list";

export default function TransaksiListPage() {
	const set = useLocationUrlId(s => s.setValue)

	useEffect(() => { set('transaksi') }, [])

    return (
		<AdminLayout withSearch={false}>
			<TransaksiListModule />
		</AdminLayout>
	);
}

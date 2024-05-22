import { useEffect } from "react";
import AdminLayout from "../layout/admin-layout";
import { useLocationUrlId } from "../store/useLocationUrlId";
import ReplyUlasanListModule from "../modules/reply-ulasan-list";

export default function ReplyUlasanPage() {
	const set = useLocationUrlId((s) => s.setValue);

    useEffect(() => {
        set("reply-ulasan");
    }, []);

	return (
		<AdminLayout withSearch={false}>
			<ReplyUlasanListModule />
		</AdminLayout>
	)
}
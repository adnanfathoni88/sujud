import { useEffect } from "react";
import AdminLayout from "../../layout/admin-layout";
import AdminListModule from "../../modules/admin";
import { useLocationUrlId } from "../../store/useLocationUrlId";

export default function CategoryListPage() {
    const set = useLocationUrlId((s) => s.setValue);

    useEffect(() => {
        set("category");
    }, []);

    return (
        <AdminLayout withSearch={false}>
            <AdminListModule />
        </AdminLayout>
    );
}

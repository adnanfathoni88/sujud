import { useEffect } from "react";
import AdminLayout from "../../layout/admin-layout";
import UlasanModule from "../../modules/ulasan/index";
import { useLocationUrlId } from "../../store/useLocationUrlId";

export default function ulasanPage() {
    const set = useLocationUrlId((s) => s.setValue);

    useEffect(() => {
        set("ulasan");
    }, []);

    return (
        <AdminLayout withSearch={false}>
            <UlasanModule />
        </AdminLayout>
    );
}

import { useParams } from "@tanstack/react-router";
import ButtonSwitch from "../../components/button-switch";
import {
    useGetCategoryById,
    useGetCategoryList,
} from "../../adapters/hooks/useCategoy";

export default function CategoryDetailModule() {
    const { categoryId } = useParams({ strict: false });
    const { data } = useGetCategoryById({ id: categoryId });

    return (
        <>
            <p>Product Detail Page ID: {categoryId}</p>
            <hr />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}

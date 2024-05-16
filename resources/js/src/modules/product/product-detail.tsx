import { useParams } from "@tanstack/react-router";
import ButtonSwitch from "../../components/button-switch";
import {
    useDeleteProductById,
    useGetProductById,
} from "../../adapters/hooks/useProducts";

export default function ProductDetailModule() {
    const { productId } = useParams({ strict: false });
    const { data } = useGetProductById({ id: productId });
    const mutate = useDeleteProductById({ id: productId });

    const handleDelete = () => {
        mutate.mutate();
    };

    return (
        <>
            <ButtonSwitch />
            <p>Product Detail Page ID: {productId}</p>
            <hr />
            {data && (
                <button
                    className="bg-red-600 p-3 text-white"
                    onClick={handleDelete}
                >
                    DELETE
                </button>
            )}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}

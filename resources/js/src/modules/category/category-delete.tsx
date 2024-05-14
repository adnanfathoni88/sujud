import { useParams } from "@tanstack/react-router";
import { useDeleteCategoryById } from "../../adapters/hooks/useCategoy";
import { useEffect } from "react";

export default function CategoryDeleteModule() {
    const { categoryId } = useParams({ strict: false });
    const mutate = useDeleteCategoryById({ id: categoryId });

    useEffect(() => {
        mutate.mutate();
    });

    return <></>;
}

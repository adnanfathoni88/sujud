import { useMutation, useQuery } from "@tanstack/react-query";
import { addAdmin } from "../api/admin";
import { queryClient } from "../../main";
import { TAdmin } from "../api/admin";

export function useAddAdmin() {
    {
        return useMutation({
            mutationKey: ["useAddAdmin"],
            mutationFn: (param: TAdmin) => addAdmin(param),
            onSuccess: () => {
                queryClient.prefetchQuery({
                    queryKey: ["useGetAdminList"],
                    // queryFn: () => getAdminList(),
                });
            },
        });
    }
}

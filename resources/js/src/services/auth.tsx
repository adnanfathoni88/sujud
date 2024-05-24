import { useEffect } from "react";
import { useGetProfile } from "../adapters/hooks/useProfile";
import { useProfileStore } from "../store/useProfile";
import { toastError } from "../utils/toast";

export const handleLogout = () => {
	fetch('/api/auth/logout', { method: "post" })
		.then((res) => {
			if (res.status === 201) window.location.reload();
		})
		.catch(() => toastError('Gagal logout'));
}

export const AuthWrapper = ({ children }) => {
	const { data } = useGetProfile()
	const setProfile = useProfileStore((state) => state.setValue)

	useEffect(() => {

		if (data?.response) setProfile(data.response)

	}, [data?.response])

	return children
};
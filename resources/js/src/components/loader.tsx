import { RiLoader5Line } from "react-icons/ri";

export default function Loader() {
	return (
		<div className="flex items-center justify-center py-7">
			<RiLoader5Line className="animate-spin-2 text-primary" size={40} />
		</div>
	)
}
import Icon from "./icon";
import { FaStar } from "react-icons/fa";

export default function StarRating({ rating }: { rating: number }) {
	return (
		<div className="flex gap-1">
			{ Array.from({ length: rating }).map((_, index) => (
				<div key={ index } className="text-yellow-400" >
					<FaStar />
				</div>
			)) }
		</div>
	)
}
import { twMerge } from "tailwind-merge";
import Icon from "./icon";
import { FaStar } from "react-icons/fa";

export default function StarRatingWithAction({ rating, setRating }: { setRating: React.Dispatch<React.SetStateAction<number>>, rating: number }) {
	return (
		<div className="flex gap-1">
			{ Array.from({ length: 5 }).map((_, index) => (
				<button 
					type="button"
					className={twMerge(rating > index ? 'text-yellow-400' : 'text-black/20', 'focus:outline-none text-xl')}
					onClick={() => setRating(index + 1)} key={ index } 
				>
					<FaStar />
				</button>
			)) }
		</div>
	)
}
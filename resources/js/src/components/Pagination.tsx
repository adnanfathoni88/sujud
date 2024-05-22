import { useNavigate, useSearch } from "@tanstack/react-router"
import { twMerge } from "tailwind-merge"

export default function Pagination({ withSearch, navigate, nextUrl }: { withSearch?: boolean, navigate: ReturnType<typeof useNavigate>, nextUrl?: string }) {
	const search = useSearch({ strict: false })

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === "Enter") {
			const q = (e.target as HTMLInputElement).value
			const urlSearchParam = new URLSearchParams()
			urlSearchParam.append("q", q)
			if(search?.page) urlSearchParam.append("page", search.page)
			navigate({ to: `?${urlSearchParam.toString()}` })
		}
	}

	const onPagination = (page: number) => () => {
		const urlSearchParam = new URLSearchParams()
		urlSearchParam.append("page", page.toString())
		if(search?.q) urlSearchParam.append("q", search?.q || "")
		navigate({ to: `?${urlSearchParam.toString()}` })
	}

	return (
		<div className="flex items-center mb-6">
			{ withSearch && (
				<input
					type="text"
					onKeyDown={ onKeyDown }
					defaultValue={ search?.q }
					placeholder="Cari produk (Enter)"
					className={ twMerge(`w-full rounded-md border border-stroke px-4 py-2 text-sm text-black bg-zinc-200 dark:bg-black/40 dark:text-white dark:border-strokedark`) }
				/>
			) }
			{/* next prev button */ }
			<div className={twMerge("flex items-center space-x-2", withSearch ? "ml-4" : "ml-0 justify-between w-full")}>
				<button
					onClick={ onPagination(Number(search?.page || 1) - 1) }
					disabled={ (search?.page <= 1) || !search?.page }
					className={ twMerge(`rounded-md border border-stroke px-4 py-2 text-sm text-black bg-zinc-200 dark:bg-black/40 dark:text-white dark:border-strokedark`, ((search?.page <= 1) || !search?.page) && `cursor-not-allowed`) }
				>
					Prev
				</button>
				<button
					onClick={ onPagination(Number(search?.page || 1) + 1) }
					disabled={ !nextUrl }
					className={ twMerge(`rounded-md border border-stroke px-4 py-2 text-sm text-black bg-zinc-200 dark:bg-black/40 dark:text-white dark:border-strokedark`, !nextUrl && `cursor-not-allowed`) }
				>
					Next
				</button>
			</div>
		</div>
	)
}
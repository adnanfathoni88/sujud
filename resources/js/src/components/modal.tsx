
// export default function NewCategory() {
// 	return (
// 		<button className="">Buat Baru</button>
// 	)
// }

import { Button, Dialog, Transition, TransitionChild } from '@headlessui/react'
import { Component } from 'react'
import { match } from 'ts-pattern'

export type TCategoryModal = {
	title: string
	children: JSX.Element
	open: boolean
	onOpen: () => void
	onClose: () => void
	Trigger?: JSX.Element
}

export default function Modal({ title, open, children, onOpen, onClose, Trigger }: TCategoryModal) {
	return (
		<>
			{ match(Boolean(Trigger))
				.with(true, () => Trigger)
				.otherwise(() => (
					<Button
						onClick={ onOpen }
						className="rounded-md bg-first py-2 px-4 text-sm font-medium text-white"
					>
						{ title }
					</Button>
				))}

			<Transition appear show={ open }>
				<Dialog as="div" className="relative z-10 focus:outline-none" onClose={ onClose } __demoMode>
					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 bg-black/50">
							<TransitionChild
								enter="ease-out duration-300"
								enterFrom="opacity-0 transform-[scale(95%)]"
								enterTo="opacity-100 transform-[scale(100%)]"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 transform-[scale(100%)]"
								leaveTo="opacity-0 transform-[scale(95%)]"
							>
								{ children }
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

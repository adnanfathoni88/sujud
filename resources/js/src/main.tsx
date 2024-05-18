import { router } from './routes'
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
export const queryClient = new QueryClient();

export default function Main() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={ router } />
			<ToastContainer />
		</QueryClientProvider>
	)
}

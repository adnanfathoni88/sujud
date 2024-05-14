import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';

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

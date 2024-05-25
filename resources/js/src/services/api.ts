// axios instance with interceptor
import axios from 'axios';

export const apiJSONPlaceholder = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});


export const api = axios.create({
	baseURL: '/api',
});

api.interceptors.response.use((res) => res, (err) => {
	const status = err.response.status
	const url = new URL(err.request.responseURL)
	
	if(status === 401 && url.pathname !== '/api/profile') return window.location.reload()
	if(status === 403) return window.location.replace('/login');
})

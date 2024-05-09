// axios instance with interceptor
import axios from 'axios';

export const api = axios.create({
	baseURL: '/api',
});

export const apiJSONPlaceholder = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./resources/js/**/*.{ts,tsx}',
		"./node_modules/flowbite/**/*.js"
	],
	prefix: "",
	theme: {
		extend: {
			colors: {
				first: "#4f46e5"
			},
		},
	},
	plugins: [require('flowbite/plugin')],
}
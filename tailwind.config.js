/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.ts",
        "./resources/**/*.tsx",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}


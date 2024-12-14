import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                heading: ['Poppins', 'sans-serif'],
                body: ['Roboto', 'sans-serif'],
                button: ['Montserrat', 'sans-serif'],
            },

            height: {
                'fullw': '100vw',
            },
            minHeight: {
                'svhq' : 'calc(100svh - 10rem)'
            },
            backgroundColor: {
                'smanda': '#133E87',
                'warning': '#f2d40c',
            },
            colors: {
                'smanda': '#133E87',
                'warning': '#f2d40c',
            },
        },
    },
    plugins: [],
};

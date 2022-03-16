const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'dark-cream': '#dad2bc',
                cream: '#dad2bc',
                blue: '#70798c',
                black: '#252323',
                pink: '#e85a4f'
            },
            fontFamily: {
                Raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
                OpenSans: ['Open Sans', ...defaultTheme.fontFamily.sans]
            },
            fontSize: {
                sm: '.625rem',
                lg: '1.625rem'
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
            }
        }
    },
    plugins: []
};

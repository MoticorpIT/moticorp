module.exports = {
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
        },
        extend: {
            colors: {
                'moticorp': {
                    100: '#FEF3EA',
                    200: '#FCE0CB',
                    300: '#FACDAC',
                    400: '#F7A86D',
                    500: '#F3822F',
                    600: '#DB752A',
                    700: '#924E1C',
                    800: '#6D3B15',
                    900: '#49270E',
                }
            },
            fontFamily: {
                moticorp: [
                    'Roboto',
                    'sans-serif',
                ],
                hero: [
                    'Source Code Pro',
                    'monospace'
                ]
            },
            fontSize: {
                '2xxl': '1.75rem',
                '3xxl': '2rem',
                '7xl': '5rem',
            },
        }
    },
    variants: {},
    plugins: []
}

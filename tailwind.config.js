module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif']
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

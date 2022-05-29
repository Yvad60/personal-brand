module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				primary: '#1B73E8',
				primary_light: '#FDFCFC',
				primary_dark: '#505050',
			},
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
		boxShadow: {
			main: '0px 0px 6px 4px rgba(0, 0, 0, 0.1)',
		},
	},
	plugins: [],
};

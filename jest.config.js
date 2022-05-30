const jestConfig = {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'\\.(css)$': 'identity-obj-proxy',
	},
};

export default jestConfig;

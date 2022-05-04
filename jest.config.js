const jestConfig = {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	moduleFileExtensions: ['js', 'jsx', 'json'],
	testEnvironment: 'jsdom',
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	verbose: false,
};

export default jestConfig;

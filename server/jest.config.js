const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.(t|j)s', '!**/node_modules/**'],
    coverageDirectory: './coverage',
    testEnvironment: 'node',
    moduleNameMapper: pathsToModuleNameMapper(
        {
            "src/*": ["./src/*"]
        },
        { prefix: '<rootDir>/' }
    ),
};

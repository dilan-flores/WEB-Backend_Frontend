module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/*.test.js'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
    '^@controllers/(.*)$': '/src/controllers/$1',
    '^@models/(.*)$': '/src/models/$1',
    '^@routers/(.*)$': '/src/routers/$1',
    '^@helpers/(.*)$': '/src/helpers/$1',
    },
    setupFilesAfterEnv: ['/src/setupTests.js'],
    };

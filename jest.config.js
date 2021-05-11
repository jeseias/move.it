module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    "@test-utils": "<rootDir>/src/modules/test-utils.tsx",
    "@styles/(.*)": "<rootDir>/src/styles/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@views/(.*)": "<rootDir>/src/views/$1",
    "@contexts/(.*)": "<rootDir>/src/contexts/$1",
    "@styles-components/(.*)": "<rootDir>/src/styles/components/$1",
    "@styles-pages/(.*)": "<rootDir>/src/styles/pages/$1",
    // '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__test__/__mocks__/fileMock.js',
    // "@design-system": "<rootDir>/modules/design-system",
    // "@design-system/(.*)$": "<rootDir>/modules/design-system/$1",
    // "@elements/(.*)$": "<rootDir>/modules/elements/$1",
    // "@elements": "<rootDir>/modules/elements/index",
    // "@api/(.*)$": "<rootDir>/modules/api/$1",
    // "@api": "<rootDir>/modules/api/index",
    // "@constants/(.*)$": "<rootDir>/modules/constants/$1",
    // "@hooks/(.*)$": "<rootDir>/modules/hooks/$1",
    // "@hooks": "<rootDir>/modules/hooks",
    // "@redux/(.*)$": "<rootDir>/modules/redux/$1",
    // "@typescript/(.*)$": "<rootDir>/modules/typescript/$1",
    // "@utils/(.*)$": "<rootDir>/modules/utils/$1",
    // "@components/(.*)$": "<rootDir>/components/$1",
    // "@components": "<rootDir>/components/index"
  },
  setupFiles: ['<rootDir>/.jest/set-env.js'], // 'jest-localstorage-mock',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', 'modules']
};

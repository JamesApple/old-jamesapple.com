module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  setupTestFrameworkScriptFile: './setup-jest.js',
  globals: {
    __PATH_PREFIX__: ''
  },
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(tsx?)$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    'typeface-*': 'identity-obj-proxy',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.js'
  },
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'html']
}

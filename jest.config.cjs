/** @type { import('ts-jest/dist/types').JestConfigWithTsJest } */
const esModules = ['@iconsauce'].join('|')

module.exports = {
  preset: 'ts-jest/presets/default-esm',
  collectCoverage: true,
  testEnvironment: 'node',
  transform: {
    '\\.ts$': ['babel-jest'],
  },
  // extensionsToTreatAsEsm: ['.ts'],
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
  testRegex: [
    '([a-z/.]{1,}).test.ts$',
  ],
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs', 'cjs', 'mts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

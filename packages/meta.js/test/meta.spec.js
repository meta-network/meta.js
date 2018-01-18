const meta = require('../dist/meta')
const pkg = require('../package.json')

/**
 * meta.js tests
 */
describe('meta.js :: config', () => {
  it('Should export config object', () => {
    const actual = meta.config
    const expected = {
      META_ID_PROFILE_CLAIM_PREFIX: 'profile.',
      META_ID_USERNAME_SUFFIX: '.id.meta',
    }

    expect(actual).toEqual(expected)
  })
})

describe('meta.js :: @meta.js/identity-claims', () => {
  it('Should export @meta.js/identity-claims module', () => {
    const actual = meta.identityClaims

    expect(actual).toBeDefined()
  })
})

describe('meta.js :: @meta.js/identity', () => {
  it('Should export @meta.js/identity module', () => {
    const actual = meta.identity

    expect(actual).toBeDefined()
  })
})

describe('meta.js :: version', () => {
  it('Should return current library version', () => {
    const actual = meta.version
    const expected = pkg.version

    expect(actual).toEqual(expected)
  })
})

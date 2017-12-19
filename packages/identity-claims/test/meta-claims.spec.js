const metaIdentityClaims = require('../dist/meta-identity-claims')

/**
 * @meta.js/identity-claims tests
 */
describe('@meta.js/identity-claims :: createIdentityClaimObject', () => {
  it('Should return a valid META Identity Claim object', () => {
    const account = {
      address: '0xE4258268bf30F9540EeBfF7150148E387bcE0a2f',
      privateKey:
        '9969281b7a152e6e6c9bdaf60f64ad6882956c31f56241960eeae90d6980e6e7',
    }
    const claimMessage = 'id123'
    const extraData = {
      accessToken:
        'BQABMqi19NoMMXFhmpnQpm8aU_m85oKqTjgH_8BPmz2G2Vlj2TLWHQ09HAEarNml6brWGDggQj5qHSEDiNwXJPQ_NqPBtVuHL6ScipjpsxXuho6ySuWWULz2Ipaqqe74kxmiobQRS8wkHl6gPP8KIfO0TU1Q',
    }

    const actual = metaIdentityClaims.createIdentityClaimObject(
      account,
      claimMessage,
      extraData
    )
    const expected = {
      address: account.address,
      claimHash:
        '0xea39355900790422fb9eab06d2c6c25a2c1ce1bb6955276eeedf1055cc35623b',
      claimMessage: claimMessage,
      signature:
        '0x11694fae74072cc5df26f8e2cfeb1ba90f1a0c2c03145904973237b2ee2e32324d80808e76b446f2ee76143c33e3588d868e893ddd33c079a452bb9d81155b8f00',
      accessToken: extraData.accessToken,
    }

    expect(actual).toEqual(expected)
  })
})

describe('@meta.js/identity-claims :: signMessage', () => {
  it('Should return signature of message', () => {
    const message = 'id123'
    const privateKey =
      '9969281b7a152e6e6c9bdaf60f64ad6882956c31f56241960eeae90d6980e6e7'

    const actual = metaIdentityClaims.signMessage(message, privateKey)
    const expected =
      '0x11694fae74072cc5df26f8e2cfeb1ba90f1a0c2c03145904973237b2ee2e32324d80808e76b446f2ee76143c33e3588d868e893ddd33c079a452bb9d81155b8f00'

    expect(actual).toEqual(expected)
  })
})

describe('@meta.js/identity-claims :: recoverAddressFromIdentityClaim', () => {
  it('Should recover address from META Identity Claim', () => {
    const claimHash =
      '0xea39355900790422fb9eab06d2c6c25a2c1ce1bb6955276eeedf1055cc35623b'
    const signature =
      '0x11694fae74072cc5df26f8e2cfeb1ba90f1a0c2c03145904973237b2ee2e32324d80808e76b446f2ee76143c33e3588d868e893ddd33c079a452bb9d81155b8f00'

    const actual = metaIdentityClaims.recoverAddressFromIdentityClaim(
      claimHash,
      signature
    )
    const expected = '0xE4258268bf30F9540EeBfF7150148E387bcE0a2f'

    expect(actual).toEqual(expected)
  })
})

describe('@meta.js/identity-claims :: verifyIdentityClaim', () => {
  it('Should verify address from META Identity Claim', () => {
    const address = '0xE4258268bf30F9540EeBfF7150148E387bcE0a2f'
    const claimHash =
      '0xea39355900790422fb9eab06d2c6c25a2c1ce1bb6955276eeedf1055cc35623b'
    const signature =
      '0x11694fae74072cc5df26f8e2cfeb1ba90f1a0c2c03145904973237b2ee2e32324d80808e76b446f2ee76143c33e3588d868e893ddd33c079a452bb9d81155b8f00'

    const actual = metaIdentityClaims.verifyIdentityClaim(
      address,
      claimHash,
      signature
    )
    const expected = true

    expect(actual).toEqual(expected)
  })
})

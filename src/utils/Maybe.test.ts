import Maybe from './maybe'

describe('Maybe', () => {
  describe('.getOr', () => {
    const testFn = (maybeString: string | null): Maybe<string> => {
      return maybeString ? Maybe.some(maybeString) : Maybe.none()
    }

    it('It returns an existing value', () => {
      const subject = testFn('Hello')
      expect(subject.getOr('Bye')).toEqual('Hello')
    })

    it('It returns an existing value', () => {
      const subject = testFn(null)
      expect(subject.getOr('Bye')).toEqual('Bye')
    })
  })

  describe('#map', () => {
    const subject = Maybe.some('String')
    it('Applies the supplied function to the contents', () => {
      const insertMe = (s: string) => {
        expect(s).toEqual('String')
        return 'Success!'
      }

      expect(subject.map(insertMe).getOr('Fail')).toEqual('Success!')
    })
  })

  describe('#fmap', () => {
    const subject = Maybe.some('String')
    const testFn = (_m: Maybe<string>) => Maybe.none()
    it('Accepts a function that returns a maybe', () => {
      expect(testFn(subject).getOr('Success!')).toEqual('Success!')
    })
  })
})

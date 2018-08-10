import KaprekarsConstant, { arrangeAsc, arrangeDsc, padZeros, subtractSmallerFromLarger } from '../index'

describe.skip('(placeholder test)', () => {
  it('should not throw', () => {
    expect(KaprekarsConstant).not.toThrow()
  })
})

describe('(Helper) arrangeAsc', () => {
  it('should sort the digits of a number', () => {
    expect(arrangeAsc('3521')).toBe('1235')
  })

  it('should sort zeros to the beginning', () => {
    expect(arrangeAsc('3501')).toBe('0135')
  })
})

describe('(Helper) arrangeDsc', () => {
  it('should sort the digits of a number', () => {
    expect(arrangeDsc('3521')).toBe('5321')
  })

  it('should sort zeros to the beginning', () => {
    expect(arrangeDsc('3501')).toBe('5310')
  })
})

describe('(Helper) padZeros', () => {
  it('should add zeros until the number is four digits', () => {
    expect(padZeros('1')).toBe('0001')
    expect(padZeros('11')).toBe('0011')
    expect(padZeros('111')).toBe('0111')
    expect(padZeros('1111')).toBe('1111')
  })
})

describe('(Helper) subtractSmallerFromLarger', () => {
  it('should return the diff of the larger number minus the smaller number', () => {
    expect(subtractSmallerFromLarger('1000', '0050')).toBe('0950')
    expect(subtractSmallerFromLarger('0050', '1000')).toBe('0950')
  })
})

describe('(Test cases)', () => {
  it('should pass test case 1', () => {
    expect(KaprekarsConstant(3524)).toBe(3)
  })

  it('should pass test case 2', () => {
    expect(KaprekarsConstant(2111)).toBe(5)
  })

  it('should pass test case 3', () => {
    expect(KaprekarsConstant(9831)).toBe(7)
  })
})

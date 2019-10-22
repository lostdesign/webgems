import * as P from '../utils/pure.js'

test('includesElOf 1', () => {
  expect(P.includesElOf([1, 2])([2])).toBeTruthy
})

test('includesElOf 2', () => {
  expect(P.includesElOf([1, 2])([3])).toBeFalsy
})

test('includesElOf 3', () => {
  expect(P.includesElOf(['a', 'b'])(['a'])).toBeTruthy
})

test('includesElOf 4', () => {
  expect(P.includesElOf(['aa', 'b'])(['a'])).toBeFalsy
})

test('partiallyIncludesElOf 1', () => {
  expect(P.partiallyIncludesElOf(['a', 'b'], ['a'])).toBeTruthy
})

test('partiallyIncludesElOf 2', () => {
  expect(P.partiallyIncludesElOf(['aa', 'b'], ['a'])).toBeTruthy
})

test('partiallyIncludesElOf 3', () => {
  expect(P.partiallyIncludesElOf(['aa', 'b'], ['c'])).toBeFalsy
})
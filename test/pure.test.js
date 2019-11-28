import * as P from '../utils/pure.js'
import mockCategories from './mockCategories.json'
import mockOutput from './mockOutput.json'

test('includesElOf 1', () => {
  expect(P.includesElOf([1, 2])([2])).toBeTruthy
})

test('includesElOf 2', () => {
  expect(P.includesElOf([1, 2], [3])).toBeFalsy
})

test('includesElOf 3', () => {
  expect(P.includesElOf(['a', 'b'])(['a', 'c'])).toBeTruthy
})

test('includesElOf 4', () => {
  expect(P.includesElOf(['aa', 'b'])(['a', 'c'])).toBeFalsy
})

test('partiallyIncludesElOf 1', () => {
  expect(P.partiallyIncludesElOf(['a', 'b'], ['a'])).toBeTruthy
})

test('partiallyIncludesElOf 2', () => {
  expect(P.partiallyIncludesElOf(['aa', 'b'])(['a', 'c'])).toBeTruthy
})

test('partiallyIncludesElOf 3', () => {
  expect(P.partiallyIncludesElOf(['aa', 'b'], ['c', 'd'])).toBeFalsy
})

test('get all tags', () => {
  expect(P.getAllTags(mockCategories)).toStrictEqual([
    "generator", "grid", "layout", "visual tool", "animation", "educational", "beginner", "career", "ui", "ux", "illustration", "svg", "tips", "tricks",
  ])
})

test('transform resources', () => {
  expect(P.transformToResources(mockCategories)).toStrictEqual(mockOutput)
})

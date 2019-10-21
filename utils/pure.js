/*eslint-disable */
import * as R from 'ramda'

/// Types
const Resource = {
  title: String,
  cleanTitle: String,
  desc: String,
  path: String,
  url: String,
  tags: [String],
}

const Category = {
  title: String,
  slug: String,
  resources: [Resource],
}

/// Functions
// isNotEmpty [a] -> Bool
const isNotEmpty = R.compose(R.not, R.isEmpty)

// getAllResources :: [Category] -> [Resource]
const getAllResources = R.compose(R.flatten, R.map(R.prop('resources')))

// tagsNotEmpty :: Resource -> Bool
const tagsNotEmpty = R.compose(isNotEmpty, R.prop('tags'))

// cleanString :: String -> String
const cleanString = R.compose(R.toLower, R.trim)

// true if list2 has element that appears in list1 else false
// includesElOf([1, 2])([2]) -> true
// includesElOf([1, 2], [3]) -> false
// includesElOf(['a', 'b'], ['a']) -> true
// includesElOf(['aa', 'b'], ['a']) -> false
// includesElOf :: [a] -> [a] -> Bool
const includesElOf = R.curry((list1, list2) => R.any(el => R.includes(el, list2), list1))

// Similar to includesElOf, but partially included strings are also allowed
// includesElOf(['a', 'b'])(['a']) -> true
// includesElOf(['aa', 'b'], ['a']) -> true
// includesElOf(['aa', 'b'], ['c']) -> false
// includesElOf :: [String] -> [String] -> Bool
const partiallyIncludesElOf = R.curry((list1, list2) => 
  R.any(el2 =>
    R.any(R.includes(el2), list1),
  list2)
)

export {
  isNotEmpty,
  getAllResources,
  tagsNotEmpty,
  includesElOf,
  partiallyIncludesElOf,
  cleanString
}
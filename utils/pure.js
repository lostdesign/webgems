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
// getAllResources :: [Category] -> [Resource]
const getAllResources = R.compose(R.flatten, R.map(R.prop('resources')))

// tagsNotEmpty :: Resource -> Bool
const tagsNotEmpty = R.compose(R.not, R.isEmpty, R.prop('tags'))

// true if list2 has element that appears in list1 else false
// includesElOf([1, 2])([2]) -> true
// includesElOf([1, 2], [3]) -> false
// includesElOf :: [a] -> [a] -> Bool
const includesElOf = R.curry((list1, list2) => R.any(el => R.includes(el, list2), list1))

export { getAllResources, tagsNotEmpty, includesElOf }
/*eslint-disable */
import * as R from 'ramda'

/// TYPES ///
// const Category = {
//   title: String,
//   slug: String,
//   resources: [Resource],
// }

// const RawResource = {
//   title: String,
//   desc: String,
//   url: String,
//   tags: [String]
// }

// const Resource = {
//   title: String,
//   cleanTitle: String,
//   desc: String,
//   path: String,
//   url: String,
//   tags: [String],
// }

/// FUNCTIONS ///
// isNotEmpty [a] -> Bool
export const isNotEmpty = R.compose(R.not, R.isEmpty)

// getAllResources :: [Category] -> [Resource]
export const getAllResources = R.compose(R.flatten, R.pluck('resources'))

// getAllTags :: [Category] -> [String]
export const getAllTags = R.compose(
  R.uniq,
  R.flatten,
  R.pluck('tags'),
  getAllResources
)

// tagsNotEmpty :: Resource -> Bool
export const tagsNotEmpty = R.compose(isNotEmpty, R.prop('tags'))

// cleanString :: String -> String
export const cleanString = R.compose(R.toLower, R.trim)

// removeSpacesLower :: String -> String
export const cleanStringAndRemoveSpaces = R.compose(R.replace(/ /g, ''), cleanString)

// true if list2 has element that appears in list1 else false
// includesElOf :: [a] -> [a] -> Bool
export const includesElOf = R.curry((list1, list2) => R.any(el => R.includes(el, list2), list1))

// Similar to includesElOf, but partially included strings are also allowed
// partiallyIncludesElOf :: [String] -> [String] -> Bool
export const partiallyIncludesElOf = R.curry((list1, list2) => 
  R.any(el2 =>
    R.any(R.includes(el2), list1),
  list2)
)

// addCleanTitleAndPath :: RawResource -> Resource
const addCleanTitleAndPath = R.curry((slug, obj) => {
  const cleanTitle = cleanStringAndRemoveSpaces(obj.title)
  return {
    ...obj,
    cleanTitle,
    path: `${slug}?card=${cleanTitle}`,
  }
})

// transformToResources :: [RawResource] -> [Resource]
export const transformToResources = categories => {
  const resourcesLens = R.lens(R.prop('resources'), R.assoc('resources'))
  return R.map(category => 
    R.over(resourcesLens, R.map(addCleanTitleAndPath(category.slug)), category),
  categories)
}

import resources from '../resources'
import * as R from 'ramda'
import { includesElOf, getAllResources, tagsNotEmpty, partiallyIncludesElOf, cleanString } from '../utils/pure'

// Polyfill for flat 
if (!Array.prototype.flat) {
	Object.defineProperty(Array.prototype, 'flat', {
		configurable: true,
		value: function flat () {
			var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0])

			return depth ? Array.prototype.reduce.call(this, function (acc, cur) {
				if (Array.isArray(cur)) {
					acc.push.apply(acc, flat.call(cur, depth - 1))
				} else {
					acc.push(cur)
				}

				return acc
			}, []) : Array.prototype.slice.call(this)
		},
		writable: true,
	})
}

export const state = () => ({
  resources: resources.map(category => ({
		...category,
		resources: category.resources.map(resource => {
			const cleanTitle = resource.title.replace(/ /g, '').toLowerCase()
			return {
				...resource,
				cleanTitle,
				path: `${category.slug}?card=${cleanTitle}`,
			}
		}),
	})),
  // List of all tags, duplicates removed
  tags: [...new Set(
		resources
			.map(resource => resource.resources).flat()
			.map(resource => resource.tags).flat()
	)],
})

export const getters = {
	tags: state => state.tags,
	resources: state => state.resources,
	findCategory: state => categoryTitle => {
		// equalsCategoryTitle :: Category -> Bool
		const equalsCategoryTitle = R.compose(
			R.equals(R.toLower(categoryTitle)), R.toLower, R.prop('title')
		)
		// findCategory :: [Category] -> Category
		const findCategory = R.find(equalsCategoryTitle)
		return findCategory(state.resources)
	},
	findByName: state => names => {
		const cleaned = R.map(cleanString, names)

		// [Resource] -> [Resource]
		const appearsInResource = R.filter(({ cleanTitle, url, desc }) => 
			partiallyIncludesElOf([cleanTitle, url, desc], cleaned)
		)
		// [Category] -> [Resource]
		const getDesiredResources = R.compose(appearsInResource, getAllResources)
		return getDesiredResources(state.resources)
	},
	findByTags: state => tags => {
		const cleaned = R.map(cleanString, tags)

		// containsTags :: [Resource] -> [Resource]
		const containsTags = R.filter(tagsNotEmpty)
		// includesDesiredTags :: Resource -> Bool
		const includesDesiredTags = R.compose(includesElOf(cleaned), R.prop('tags'))
		// findResourcesByTag :: [Resource] -> [Resource]
		const findResourcesByTag = R.filter(includesDesiredTags)
		// getDesiredResources :: [Category] -> [Resource]
		const getDesiredResources = R.compose(findResourcesByTag, containsTags, getAllResources)

		return getDesiredResources(state.resources)
	},
	sortByTitle: (_, getters) => title => {
		const category = getters.findCategory(title)
		const clone = [...category.resources]
		return {
			...category,
			resources: clone.sort(compareTitles),
		}
	},
}

const compareTitles = (x, y) => {
	if (x.cleanTitle > y.cleanTitle) {
			return 1
	} else if (x.cleanTitle < y.cleanTitle) {
			return -1
	} else {
		return 0
	}
}
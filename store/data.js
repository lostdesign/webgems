import resources from '../resources'
import { prop, compose, flatten, map, filter, isEmpty, not, any, includes, curry } from 'ramda'

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

// True if list2 has element that appears in list1
// includesElOf([1, 2], [3]) -> false
// includesElOf([1, 2])([3]) -> false
// includesElOf([1, 2], [2]) -> true
// includesElOf([1, 2])([2]) -> true
// includesElOf :: [a] -> [a] -> Bool
// const includesElOf = curry((list1, list2) => any(flip(includes)(list2), list1))

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
		return Object.assign(state.resources.find(category => category.title.toLowerCase() === categoryTitle.toLowerCase()))
	},
	findByTags: state => tags => {
		// true if list2 has element that appears in list1 else false
		// includesElOf [a] -> [a] -> Bool
		const includesElOf = curry((list1, list2) => any(el => includes(el, list2), list1))
		// getAllResources :: [Category] -> [Resource]
		const getAllResources = compose(flatten, map(prop('resources')))
		// tagsNotEmpty :: [Resource] -> Bool
		const tagsNotEmpty = compose(not, isEmpty, prop('tags'))
		// containsTags :: [Resource] -> [Resource]
		const containsTags = filter(tagsNotEmpty)
		// findResourcesByTag :: [Resource] -> [Resource]
		const findResourcesByTag = filter(compose(includesElOf(tags), prop('tags')))
		// getDesiredResources :: [Category] -> [Resource]
		const getDesiredResources = compose(findResourcesByTag, containsTags, getAllResources)

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
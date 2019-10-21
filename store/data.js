import resources from '../resources'
import { prop, compose, filter } from 'ramda'
import { includesElOf, getAllResources, tagsNotEmpty } from '../utils/pure'

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
		return Object.assign(state.resources.find(category => category.title.toLowerCase() === categoryTitle.toLowerCase()))
	},
	findByTags: state => tags => {
		// containsTags :: [Resource] -> [Resource]
		const containsTags = filter(tagsNotEmpty)
		// includesDesiredTags :: Resource -> Bool
		const includesDesiredTags = compose(includesElOf(tags), prop('tags'))
		// findResourcesByTag :: [Resource] -> [Resource]
		const findResourcesByTag = filter(includesDesiredTags)
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
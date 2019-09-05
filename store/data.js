import resources from '../resources'

// Polyfill for flat 
if (!Array.prototype.flat) {
	Object.defineProperty(Array.prototype, 'flat', {
		configurable: true,
		value: function flat () {
			var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);

			return depth ? Array.prototype.reduce.call(this, function (acc, cur) {
				if (Array.isArray(cur)) {
					acc.push.apply(acc, flat.call(cur, depth - 1));
				} else {
					acc.push(cur);
				}

				return acc;
			}, []) : Array.prototype.slice.call(this);
		},
		writable: true
	});
}

/**
 * Check if list 2 has an element of list 1.
 * includesElOf(list1, list2) -> read as list1 includesElOf list2.
 * @param {any[]} list1 
 * @param {any[]} list2 
 */
const includesElOf = (list1, list2) => list1.some(element => list2.includes(element))

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
		})
	})),
  // List of all tags, duplicates removed
  tags: [...new Set(
		resources
			.map(resource => resource.resources).flat()
			.map(resource => resource.tags).flat()
	)]
})

export const getters = {
	tags: state => state.tags,
	resources: state => state.resources,
	findResources: state => title => {
		return Object.assign(state.resources.find(resource => resource.title.toLowerCase() === title.toLowerCase()))
	},
	findByTags: state => tags => {
		const flat = state.resources.map(category => category.resources).flat()
		return flat.filter(resource => resource.tags && includesElOf(resource.tags, tags)) 
	},
	sortByTitle: (_, getters) => title => {
		const category = getters.findResources(title)
		const copy = [...category.resources]
		return {
			...category,
			resources: copy.sort(compareTitles)
		}
	}
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
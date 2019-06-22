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
  resources,
  // List of all tags, duplicates removed
  tags: [...new Set(resources.map(resource => resource.resources).flat().map(resource => resource.tags).flat())]
})

export const getters = {
  findResources: state => title => {
    return state.resources.find(resource => resource.title.toLowerCase() === title.toLowerCase())
  },
  findByTags: state => tags => {
    const flat = state.resources.map(category => category.resources).flat()
    return flat.filter(resource => resource.tags && includesElOf(resource.tags, tags)) 
  }
}
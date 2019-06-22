import resources from '../resources/'

/**
 * Check if list 2 has an element of list 1.
 * includesElOf(list1, list2) -> read as list1 includesElOf list2.
 * @param {any[]} list1 
 * @param {any[]} list2 
 */
const includesElOf = (list1, list2) => list1.some(element => list2.includes(element))

export const state = () => resources

export const getters = {
  findResources: state => title => {
    return state.find(resource => resource.title.toLowerCase() === title.toLowerCase())
  },
  findByTags: state => tags => {
    const flat = state.map(category => category.resources).flat()
    return flat.filter(resource => resource.tags && includesElOf(resource.tags, tags)) 
  }
}
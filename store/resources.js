import resources from '../resources/'

export const state = () => resources

export const getters = {
  findResources: state => title => {
    return state.find(resource => resource.title.toLowerCase() === title.toLowerCase())
  }
}
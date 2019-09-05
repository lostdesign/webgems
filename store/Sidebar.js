export const state = () => ({
  cardsShown: true
})

export const getters = {
  isCardsShown: state => state.cardsShown
}

export const mutations = {
  toggleCardsShown(state) {
    if (process.browser) localStorage.setItem('cardsShown', !state.cardsShown)
    state.cardsShown = !state.cardsShown
  }
}

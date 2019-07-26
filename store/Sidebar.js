export const state = () => ({
  cardsShown: true
})

export const mutations = {
  toggleCardsShown(state) {
    console.log(state.cardsShown)
    if (process.browser) localStorage.setItem('cardsShown', !state.cardsShown)
    state.cardsShown = !state.cardsShown
  }
}

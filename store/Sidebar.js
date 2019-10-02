export const state = () => ({
  areCardsVisible: true,
})

export const getters = {
  areCardsVisible: state => state.areCardsVisible,
}

export const mutations = {
  toggleCardsVisible(state) {
    if (process.browser) localStorage.setItem('areCardsVisible', !state.areCardsVisible)
    state.areCardsVisible = !state.areCardsVisible
  },
}

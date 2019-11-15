<template lang="pug">
  div
    transition(name="fade-title" @after-enter="afterEnter")
      h1(v-if="showTitle") Search
    transition(name="fade-card")
      div(showCards)
        component(
          v-if="resources.length"
          :is="areCardsVisible ? 'CardsView' : 'TableView'"
          :createCopyUrl="createCopyUrl"
          :activeCard="activeCard"
          :resources="resources"
        )
        p(v-else) No results
</template>

<script>
import CardsView from '../components/CardsView'
import TableView from '../components/TableView'
import * as R from 'ramda'

export default {
  components: { CardsView, TableView },
  data() {
    return {
      activeCard: '',
      resources: [],
      searchInput: {},
      showTitle: false,
      showCards: false,
      debounceID: 0,
    }
  },
  computed: {
    areCardsVisible() {
      return this.$store.getters['Sidebar/areCardsVisible']
    },
  },
  watch: {
    $route(updatedChanges) {
      clearTimeout(this.debounceID)
      this.debounceID = setTimeout(() => {
        const keywords = updatedChanges.query.keywords
        const tags = updatedChanges.query.tags
        this.searchInput = {
          keywords: keywords && R.split(',', keywords),
          tags: tags && R.split(',', tags),
        }
      }, 500)
    },
    searchInput(searchInput) {
      this.resources = this.$store.getters['data/findBySearchInputs'](searchInput.keywords, searchInput.tags)
    },
  },
  mounted() {
    this.showTitle = true
  },
  methods: {
    async createCopyUrl(resource) {
      try {
        const { path } = resource
        await this.$copyText(`https://webgems.io${path}`)
      } catch (e) {
        console.error(e)
      }
    },
    afterEnter() {
      this.showCards = true
    },
  },
}
</script>

<style lang="scss" scoped>
table {
	width: 100%;
  table-layout: fixed;
}
</style>

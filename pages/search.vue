<template lang="pug">
  div
    transition(name="fade-title" @after-enter="afterEnter")
      h1(v-if="showTitle") Search
    transition(name="fade-card")
      .cards(v-if="areCardsVisible && showCards")
        template(v-for='resource in resources' )
          Card(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
    transition(name="fade-card")
      table(v-if="!areCardsVisible && showCards")
        template(v-for='resource in resources' )
          TableRow(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
</template>

<script>
import Card from '../components/Card'
import TableRow from '../components/TableRow'
import * as R from 'ramda'

export default {
  components: { Card, TableRow },
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
        const newSearchInput = {
          keywords: keywords && R.split(',', keywords),
          tags: tags && R.split(',', tags),
        }
        this.searchInput = newSearchInput
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

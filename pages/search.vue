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
// import { removeFirstChar } from '../utils/pure'

export default {
  components: { Card, TableRow },
  data() {
    return {
      activeCard: '',
      resources: [],
      searchInput: {},
      tags: [],
      showTitle: false,
      showCards: false,
    }
  },
  computed: {
    areCardsVisible() {
      return this.$store.getters['Sidebar/areCardsVisible']
    },
  },
  watch: {
    $route(updatedChanges) {
      const keywords = updatedChanges.query.keywords
      const tags = updatedChanges.query.tags
      const newSearchInput = {
        keywords: keywords && R.split(',', keywords),
        tags: tags && R.split(',', tags),
      }
      this.searchInput = newSearchInput
    },
    searchInput(searchInput) {
      let resources = []
      if (searchInput.keywords)
        resources = resources.concat(this.$store.getters['data/findByName'](searchInput.keywords))
      if (searchInput.tags)
        resources = resources.concat(this.$store.getters['data/findByTags'](searchInput.tags))
      this.resources = resources
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

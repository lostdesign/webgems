<template lang="pug">
  div
    transition(name="fade-title" @after-enter="afterEnter")
      h1(v-if="showTitle") Search
    transition(name="fade-card")
      .cards(v-if="areCardsVisible && showCards")
        template(v-if="resources.length")
          template(v-for='resource in resources' )
            Card(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
        p(v-else) No results
</template>

<script>
import Card from '../components/Card'
import * as R from 'ramda'

export default {
  components: { Card },
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
      const updateSearch = () => {
        const keywords = updatedChanges.query.keywords
        const tags = updatedChanges.query.tags
        this.searchInput = {
          keywords: keywords && R.split(',', keywords),
          tags: tags && R.split(',', tags),
        }
      }

      if (updatedChanges.query.enter !== 'true')
        this.debounceID = setTimeout(updateSearch, 300)
      else
        updateSearch()
    },
    searchInput(searchInput) {
      this.resources = this.$store.getters['data/findBySearchInputs'](searchInput.keywords, searchInput.tags)
    },
  },
  mounted() {
    this.showTitle = true

    const keywords = this.$route.query.keywords
    const tags = this.$route.query.tags
    this.searchInput = {
      keywords: keywords && R.split(',', keywords),
      tags: tags && R.split(',', tags),
    }
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

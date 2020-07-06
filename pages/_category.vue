<template lang="pug">
  div
    transition(name="fade-title" @after-enter="afterEnter")
      h1(v-if="showTitle") {{ category.title }}
    transition(name="fade-card")
      .cards(v-if="areCardsVisible && showCards")
        template(v-for='resource in category.resources' )
          Card(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
</template>

<script>
import Card from '../components/Card'

export default {
  components: { Card },
  data() {
    return {
      categoryRouteTitle: this.$route.params.category,
      index: '',
      activeCard: '',
      showTitle: false,
      showCards: false,
    }
  },
  computed: {
    areCardsVisible() {
      return this.$store.getters['Sidebar/areCardsVisible']
    },
    category() {
      return this.$store.getters['data/sortByTitle'](this.categoryRouteTitle)
    },
  },
  created() {
    this.activeCard = this.$route.query.card || ''
  },
  mounted() {
    this.showTitle = true
  },
  methods: {
    setActiveCard(index) {
      this.activeCard = index
    },
    async createCopyUrl(resource) {
      try {
        const { path, cleanTitle } = resource
        await this.$copyText(`https://webgems.io${path}`)
        this.setActiveCard(cleanTitle)
        this.$router.push(path)
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

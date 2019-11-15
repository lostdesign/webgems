<template lang="pug">
  div
    transition(name="fade-title" @after-enter="afterEnter")
      h1(v-if="showTitle") {{ category.title }}
    transition(name="fade-card")
      div(v-if="showCards")
        <component :is="areCardsVisible ? 'CardsView' : 'TableView'" :category="category" :createCopyUrl="createCopyUrl" :activeCard='activeCard'></component>
</template>

<script>
import CardsView from '../components/CardsView'
import TableView from '../components/TableView'

export default {
  components: { CardsView, TableView },
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

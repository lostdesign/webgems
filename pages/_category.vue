<template lang="pug">
  div
    h1 {{ category.title }}
    .cards(v-if="areCardsVisible")
      template(v-for='resource in category.resources' )
        Card(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
    table(v-if="!areCardsVisible")
      template(v-for='resource in category.resources' )
        TableRow(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
</template>

<script>
import Card from '../components/Card'
import TableRow from '../components/TableRow'

export default {
  components: { Card, TableRow },
  data() {
    return {
      categoryRouteTitle: this.$route.params.category,
      index: '',
      activeCard: '',
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
    }
  }
}
</script>

<style lang="scss" scoped>
table {
	width: 100%;
  table-layout: fixed;
}
</style>

<template lang="pug">
  div
    h1 {{ category.title }}
    .cards(v-if="areCardsVisible")
      template(v-for='resource in category.resources' )
        Card(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
    table(v-if="!areCardsVisible")
      TableHead(:title="'Welcome'" :desc="'Description'" :url="'URL'")
      template(v-for='resource in category.resources' )
        TableRow(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
</template>

<script>
import Card from "../components/Card";
import TableHead from "../components/TableHead";
import TableRow from "../components/TableRow";

export default {
  data() {
    return {
      categoryRouteTitle: this.$route.params.category,
      index: '',
      activeCard: '',
    };
  },
  computed: {
    areCardsVisible() {
      return this.$store.getters['Sidebar/areCardsVisible']
    },
    category() {
      return this.$store.getters['data/sortByTitle'](this.categoryRouteTitle)
    },
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
        console.error(e);
      }
    }
  },
  created() {
    this.activeCard = this.$route.query.card || ''
  },
  components: { Card, TableHead, TableRow }
};
</script>

<style lang="scss" scoped>
table {
	width: 100%;
}
</style>

<template lang="pug">
  div
    h1 {{ category.title }}
    .cards(v-if="cardsShown")
      template(v-for='resource in category.resources' )
        Card(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.title')
    table(v-if="!cardsShown")
      TableHead(:title="'Welcome'" :desc="'Description'" :url="'URL'")
      template(v-for='resource in category.resources' )
        TableRow(:resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.title')
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
      activeCard: ''
    };
  },
  computed: {
    cardsShown() {
      return this.$store.getters['Sidebar/isCardsShown']
    },
    category() {
      const category = this.$store.getters['data/sortByTitle'](this.categoryRouteTitle)
      const clone = JSON.parse(JSON.stringify(category))
      const query = this.$route.query.card
      for (const resource of clone.resources) {
        resource.active = resource.cleanTitle === query ? 'card--active' : ''
      }
			return category
    },
  },
  methods: {
    onToggle(index) {
      if (this.activeCard === index) {
        this.activeCard = null;
      } else {
        this.activeCard = index;
      }
    },
    async createCopyUrl(resource) {      
      try {
        const { path, title } = resource
        await this.$copyText(`https://webgems.io${path}`)
        this.onToggle(title)
        this.$router.push(path)
      } catch (e) {
        console.error(e);
      }
    }
  },
  components: { Card, TableHead, TableRow }
};
</script>

<style lang="scss" scoped>
table {
	width: 100%;
}
</style>

<template lang="pug">
  div
    h1 {{ category.title }}
    .cards(v-if="cardsShown")
      template
        div(v-for='resource in category.resources' :key='resource.title')
          Card(:resource='resource' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.title')
    table(v-if="!cardsShown")
      TableHead(:title="'Welcome'" :desc="'Description'" :url="'URL'")
      template
        div(v-for='resource in category.resources' :key='resource.title')
          TableRow(:resource='resource' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.title')
</template>

<script>
import store from "../store.json";
import Card from "../components/Card";
import TableHead from "../components/TableHead";
import TableRow from "../components/TableRow";

export default {
  data() {
    return {
      categoryRouteTitle: this.$route.params.category,
      categories: store,
      index: '',
      activeCard: ''
    };
  },
  computed: {
    cardsShown() {
      return this.$store.state.Sidebar.cardsShown;
    },
    category() {
      const category = this.categories.find(
        category =>
          category.title.toLowerCase() === this.categoryRouteTitle.toLowerCase()
      );
      const pagePath = this.$router.history.current.path
      const query = this.$route.query.card
      for (const resource of category.resources) {
        resource.cleanTitle = resource.title.replace(/ /g, '').toLowerCase()
        resource.path = `${pagePath}?card=${resource.cleanTitle}`
        resource.active = (resource.cleanTitle === query) ? 'card--active' : ''
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

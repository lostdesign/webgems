<template lang="pug">
  div
    h1 {{ category.title }}
    .cards(v-if="cardsShown")
      template(v-for='resource in category.resources')
        Card(:title='resource.title' :desc='resource.desc' :url='resource.url')
    table(v-if="!cardsShown")
      TableHead(:title="'Welcome'" :desc="'Description'" :url="'URL'")
      template(v-for='resource in category.resources')
        TableRow(:title='resource.title' :desc='resource.desc' :url='resource.url')
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
      categories: store
    };
  },
  computed: {
    cardsShown() {
      return this.$store.state.Sidebar.cardsShown;
    },
    category() {
      return this.categories.find(
        category =>
          category.title.toLowerCase() === this.categoryRouteTitle.toLowerCase()
      );
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

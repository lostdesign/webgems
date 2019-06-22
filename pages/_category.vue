<template lang="pug">
  div
    h1 {{ category.title }}
    .cards
      template(v-for='resource in category.resources')
        Card(:title='resource.title' :desc='resource.desc' :url='resource.url')
</template>

<script>
import Card from '../components/Card'

export default {
  data () {
    return {
      categoryRouteTitle: this.$route.params.category,
      categories: this.$store.state.resources,
    }
  },
  computed: {
    category() {      
      return this.categories.find(category => category.title.toLowerCase() === this.categoryRouteTitle.toLowerCase())
    }
  },
  components: { Card },
}
</script>

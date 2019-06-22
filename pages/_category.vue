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
    }
  },
  computed: {
    category() {
      return this.$store.getters['resources/findResources'](this.categoryRouteTitle)
    }
  },
  components: { Card },
}
</script>

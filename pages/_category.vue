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
      category: this.$store.getters['data/findResources'](this.$route.params.category),
    }
  },
  components: { Card },
}
</script>

<template lang="pug">
  div
    h1 {{ category.title }}
    .cards
      template(v-for='resource in category.resources')
        Card(:title='resource.title' :desc='resource.desc' :url='resource.url')
</template>

<script>
import store from '../../store.json'
import Card from '../../components/Card'

export default {
  data () {
    return {
      categoryTitle: this.$route.params.category,
      categories: store,
    }
  },
  computed: {
    category() {
      console.log(this.categoryTitle)
      console.log(this.categories)
      const result = this.categories.find(category => category.title.toLowerCase() === this.categoryTitle.toLowerCase())
      console.log(result)
      return result
    }
  },
  components: { Card, },
}
</script>


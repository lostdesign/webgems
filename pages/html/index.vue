<template lang="pug">
  div
    h1 HTML
    .cards
      template(v-for='resource in resources')
        Card(:title='resource.title' :desc='resource.desc' :url='resource.url')
</template>

<script>
import Card from '../../components/Card'

export default {
  data() {
    return {
      resources: [
        {
          title: 'HTML ELEMENTS',
          desc: 'All the HTML elemens you can use. There is more than just a div :)',
          url: 'https://developer.mozilla.org/de/docs/Web/HTML/Element'
        },
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 2rem;
}
</style>

<template lang="pug">
  div
    h1 CSS
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
          title: 'Flexbox froggy',
          desc: 'A game to learn Flexbox',
          url: 'https://flexboxfroggy.com'
        },
        {
          title: 'CSS Gridgarden',
          desc: 'A game to learn Grid',
          url: 'https://cssgridgarden.com'
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

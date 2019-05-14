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
          title: 'Flexbox Froggy',
          desc: 'A game to learn Flexbox',
          url: 'https://flexboxfroggy.com'
        },
        {
          title: 'CSS Gridgarden',
          desc: 'A game to learn Grid',
          url: 'https://cssgridgarden.com'
        },
        {
          title: '30 Seconds of Code',
          desc: 'A curated collection of useful CSS snippets you can understand in 30 seconds or less.',
          url: 'https://30-seconds.github.io/30-seconds-of-css/'
        },
        {
          title: 'BEM naming convention',
          desc: 'Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development',
          url: 'https://getbem.com/'
        },
        {
          title: 'CSS Triggers',
          desc: 'Overview of css attributes which trigger either layout, paint or composite. Good to know if you want to learn more about css performance.',
          url: 'https://csstriggers.com/'
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
</style>

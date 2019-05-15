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
          title: 'Keyframes Editor',
          desc: 'An insanely simple way to create CSS animations',
          url: 'https://keyframes.app/editor/'
        },
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
          title: 'Grid by example',
          desc: 'Everything you need to learn CSS Grid Layout',
          url: 'https://gridbyexample.com/learn/'
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
        {
          title: 'A complete guide to flexbox',
          desc: 'A comprehensive guide to flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elemends (the flex items). It also includes history, demos, patterns and a browser support chart. By css-tricks.com',
          url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
        },
        {
          title: 'Learn CSS layout',
          desc: 'This site teaches the CSS fundamentals that are used in any website\'s layout (Unfortunately nothing abour display:grid yet).',
          url: 'http://learnlayout.com'
        },
        {
          title: 'CSSmatic - box shadow generator',
          desc: 'The ultimate box shadow generator',
          url: 'https://www.cssmatic.com/box-shadow'
        },
        {
          title: 'AirBnB CSS / Sass Styleguide',
          desc: 'A mostly reasonable approach to css and sass.',
          url: 'https://github.com/airbnb/css'
        },
        {
          title: 'Animista',
          desc: 'CSS animations on demand.',
          url: 'http://animista.net/'
        },
        {
          title: 'Use CSS Grids the right way',
          desc: 'CSS Grid is robust, flexible, and a refreshing paradigm shift from other CSS layout systems. While these are selling points for Grid, they also make it hard to learn.',
          url: 'https://vgpena.github.io/using-css-grid-the-right-way/'
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

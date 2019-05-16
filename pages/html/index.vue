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
        {
          title: 'The web accessibility basics',
          desc: 'The absolute web accessibility basics every web developer should know about.',
          url: 'https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/'
        },
        {
          title: 'Introduction to HTML',
          desc: 'In just 4 hours, learn the basics of HTML5 and start building & editing web pages.',
          url: 'https://www.codecademy.com/learn/learn-html'
        },
        {
          title: 'Awesome Canvas',
          desc: 'A curated list of awesome Canvas examples, related articles and posts.',
          url: 'https://github.com/raphamorim/awesome-canvas#readme'
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

<template lang="pug">
  div
    h1 Javascript
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
          title: 'Javascript30',
          desc: 'Free video courses about javascript. Made by WesBos',
          url: 'https://javascript30.com'
        },
        {
          title: 'Learn vanilla js',
          desc: 'A vanilla JS roadmap, along with learning resources and project ideas to help you get started.',
          url: 'https://learnvanillajs.com/'
        },
        {
          title: 'Javascript Info',
          desc: 'How it\'s done now. From the basics to advanced topics with simple, but detailed explanations.',
          url: 'https://javascript.info/'
        },
        {
          title: '30 Seconds of Code',
          desc: 'A curated collection of useful JavaScript snippets that you can understand in 30 seconds or less.',
          url: 'https://30secondsofcode.org'
        },
        {
          title: 'JS Tips',
          desc: 'JS Tips is a collection of useful daily JavaScript tips that will allow you to improve your code writing.',
          url: 'https://www.jstips.co'
        },
        {
          title: 'YDKJS',
          desc: 'This is a free series of books diving deep into the core mechanisms of the JavaScript language. The first edition of the series is now complete.',
          url: 'https://github.com/getify/You-Dont-Know-JS'
        },
        {
          title: 'Eloquent Javascript 3rd Edition',
          desc: 'This is a book about javascript, programming, and the wonders of the digital. You can read it online or get a paperback copy of it.',
          url: 'http://eloquentjavascript.net'
        },
        {
          title: 'MDN web docs - Javascript',
          desc: 'Tutorials, references, tools and resources. Your goto documentation to learn js.',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
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

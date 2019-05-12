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
          desc: 'JS Tips is a collection of useful daily JavaScript tips that will allow you to improve your code writing',
          url: 'https://www.jstips.co'
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

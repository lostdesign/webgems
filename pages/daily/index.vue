<template lang="pug">
  div
    h1 Daily
    table
      tbody.cards
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
          title: 'dev.to',
          desc: 'Where programmers share ideas and help each other grow. It is an online community for sharing and discovering great ideas, having debates, and making friends.',
          url: 'https://www.dev.to'
        },
        {
          title: 'CSS Tricks',
          desc: 'Daily webdev related articles, snippets and guides since 2007',
          url: 'https://css-tricks.com/'
        },
        {
          title: 'Smashing magazine',
          desc: 'Founded in September 2006 in Germany, Smashing Magazine delivers reliable, useful, but most importantly practical articles to web designers and developers. ',
          url: 'https://www.smashingmagazine.com/'
        },
        {
          title: 'Hackernews',
          desc: 'Hacker News is a social news website focusing on computer science and entrepreneurship.',
          url: 'https://news.ycombinator.com/'
        },
        {
          title: 'Producthunt',
          desc: 'Check popular new products out and get inspired, maybe even post yours?',
          url: 'https://www.producthunt.com/'
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
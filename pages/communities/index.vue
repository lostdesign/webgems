<template lang="pug">
  div
    h1 Communities
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
          title: 'Devcord',
          desc: 'A community of developers and designers helping each other. ',
          url: 'https://devcord.com'
        },
        {
          title: 'DomainCord',
          desc: 'DomainCord is the only domain name marketplace and discussion community built on top of the Discord platform.',
          url: 'https://discord.gg/4KjgdNd'
        },
        {
          title: 'Developer Hangout',
          desc: 'Hangout and learn with new and experienced developers in this Discord community. All ages and experience levels welcome!',
          url: 'https://discord.gg/developers'
        },
        {
          title: 'WebGL and Threejs',
          desc: 'desc',
          url: 'https://discord.gg/PJAjxvX'
        },
        {
          title: 'Design Drop',
          desc: 'We\'re a community built up of creatives, who are looking to improve ourselves, meet new people, and have fun.',
          url: 'https://discord.gg/yNBY9bP'
        },
        {
          title: '/r/webdev',
          desc: 'A community dedicated to all things web development: both front-end and back-end.',
          url: 'https://reddit.com/r/webdev'
        },
        {
          title: '/r/web_design',
          desc: 'A community dedicated to all things web design.',
          url: 'https://reddit.com/r/web_design'
        },
        {
          title: '/r/javascript',
          desc: 'All about the JavaScript programming language!',
          url: 'https://reddit.com/r/javascript'
        },
        {
          title: '/r/php',
          desc: 'Ask questions about frameworks, try your hand at php golf and strike gold or simply show off your latest work.',
          url: 'https://reddit.com/r/php'
        },
        {
          title: '/r/html',
          desc: 'A subreddit about HTML.',
          url: 'https://reddit.com/r/html'
        },
        {
          title: '/r/css',
          desc: 'For discussing Cascading Style Sheets, design principles, and technological innovations related to web development.',
          url: 'https://reddit.com/r/css'
        },
        {
          title: 'ES-Community',
          desc: 'We\'re a french community built to provide a place for exchange, mutual aid and technology watch about the JavaScript ecosystem.'
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

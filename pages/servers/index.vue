<template lang="pug">
  div
    h1 Servers
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
          title: 'Netlify',
          desc: 'Free static hosting with privacy in mind!',
          url: 'https://netlify.com'
        },
        {
          title: 'Github Pages',
          desc: 'Free static hosting by Github.',
          url: 'https://pages.github.com'
        },
        {
          title: 'Namecheap',
          desc: 'Domains for your projects',
          url: 'https://namecheap.com'
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
.cards {
  display:grid;
  grid-template-columns: repeat(4, 20%);
  grid-gap: 3rem;
}
</style>

<template lang="pug">
  div
    h1 General
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
          title: 'Developer Roadmap',
          desc: 'Below you find a set of charts demonstrating the paths that you can take and the technologies that you would want to adopt in order to become a frontend, backend or a devops. I made these charts for an old professor of mine who wanted something to share with his college students to give them a perspective; sharing them here to help the community.',
          url: 'https://github.com/kamranahmedse/developer-roadmap/blob/master/readme.md'
        },
        {
          title: 'Google Developer',
          desc: 'Tutorials, guides, and best practices for building the next generation of web experiences.',
          url: 'https://developers.google.com/web/'
        },
        {
          title: 'Google Chrome Youtube',
          desc: 'Making the web more awesome - latest news about google chrome',
          url: 'https://www.youtube.com/channel/UCnUYZLuoy1rq1aVMwx4aTzw'
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



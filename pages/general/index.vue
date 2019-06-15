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
          title: 'Caniuse',
          desc: '"Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.',
          url: 'https://caniuse.com/'
        },
        {
          title: 'DevDocs',
          desc: 'DevDocs combines multiple API documentations in a fast, organized, and searchable interface. Online and offline, always have your docs with you.',
          url: 'https://devdocs.io'
        },
        {
          title: 'Rico\'s cheatsheets',
          desc: 'Cheatsheets for any kind of technologies in the web domain.',
          url: 'https://devhints.io'
        },
        {
          title: 'Developer Roadmap',
          desc: 'Below you find a set of charts demonstrating the paths that you can take and the technologies that you would want to adopt in order to become a frontend, backend or a devops. I made these charts for an old professor of mine who wanted something to share with his college students to give them a perspective; sharing them here to help the community.',
          url: 'https://github.com/kamranahmedse/developer-roadmap/blob/master/readme.md'
        },
        {
          title: 'ebookfoundation',
          desc: 'Freely available programming books',
          url: 'https://ebookfoundation.github.io/free-programming-books/'
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
        {
          title: 'Code wars',
          desc: 'Challenge yourself on kata, created by the community to strengthen different skills. Master your current language of choice, or expand your understanding of a new one.',
          url: 'https://www.codewars.com/'
        },
        {
          title: 'Learn X in Y min',
          desc: 'Take a whirlwind tour of your next favorite language. Community-driven!',
          url: 'https://learnxinyminutes.com/'
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



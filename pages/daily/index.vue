<template lang="pug">
  div
    h1 Daily
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
          title: 'dev.to',
          desc: 'Where programmers share ideas and help each other grow. It is an online community for sharing and discovering great ideas, having debates, and making friends. Anyone can share articles, questions, discussions, etc. as long as they have the rights to the words they are sharing. Cross-posting from your own blog is welcome.',
          url: 'https://www.dev.to'
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
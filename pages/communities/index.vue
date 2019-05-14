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

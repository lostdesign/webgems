<template lang="pug">
  div
    h1 Frontend
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
          title: 'Frontend Handbook 2019',
          desc: 'A lovely guide made by frontendmasters.',
          url: 'https://frontendmasters.com/books/front-end-handbook/2019/'
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
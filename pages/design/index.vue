<template lang="pug">
  div
    h1 Design
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
          title: 'Undraw',
          desc: 'Free vector illustrations for your website.',
          url: 'https://undraw.co'
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

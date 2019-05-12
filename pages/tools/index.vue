<template lang="pug">
  div
    h1 Tools
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
          title: 'JSON Generator',
          desc: 'Random JSON generator for your project - because debugging without data, does not make sense!',
          url: 'https://www.json-generator.com'
        },
        {
          title: 'Fathom',
          desc: 'Fathom Analytics provides simple, useful website stats without tracking or storing personal data of your users.',
          url: 'https://usefathom.com'
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



<template lang="pug">
  div
    h1 Fullstack
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
          title: 'freeCodeCamp curriculum',
          desc: 'We have thousands of coding lessons to help you improve your skills. You can earn each certification by completing its 5 final projects. And yes - all of this is 100% free, thanks to the thousands of campers who donate to our nonprofit. If you are new to coding, we recommend you start at the beginning.',
          url: 'https://learn.freecodecamp.org'
        },
        {
          title: 'Learn Node',
          desc: 'Permium course by WesBos teaching you the MEPN (Mongo, Express, Pug, Node) stack using a fullstack project as example.',
          url: 'https://learnnode.com'
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



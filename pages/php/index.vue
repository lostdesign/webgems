<template lang="pug">
  div
    h1 PHP
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
          title: 'PHP the right way',
          desc: 'PHP The Right Way is an easy-to-read, quick reference for PHP popular coding standards, links to authoritative tutorials around the Web and what the contributors consider to be best practices at the present time.',
          url: 'https://phptherightway.com'
        },
        {
          title: 'The PHP manual',
          desc: 'The PHP manual is documenting the whole spec while giving examples for each property.',
          url: 'https://www.php.net/manual/en/'
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

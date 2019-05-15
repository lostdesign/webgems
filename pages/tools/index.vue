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
        {
          title: '10 free tools',
          desc: '10 free-but-professional tools for your dev projects',
          url: 'https://dev.to/sauloco/10-free-but-professional-tools-for-your-dev-projects-2eeo'
        },
        {
          title: 'headless cms',
          desc: 'A List of Content Management Systems for JAMstack Sites',
          url: 'https://headlesscms.org'
        },
        {
          title: 'StaticGen',
          desc: 'A List of Static Site Generators for JAMstack Sites',
          url: 'https://www.staticgen.com'
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



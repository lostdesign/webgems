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
        {
          title: 'Frontend Style Guide',
          desc: 'Example on how to style, format and organize your frontend project.',
          url: 'https://kaliop.github.io/frontend-style-guide/2.0/'
        },
        {
          title: 'Learn to Code HTML & CSS',
          desc: 'Learn to Code HTML & CSS is a simple and comprehensive guide dedicated to helping beginners learn HTML and CSS. Outlining the fundamentals, this guide works through all common elements of front-end design and development.',
          url: 'https://learn.shayhowe.com/html-css/'
        },
        {
          title: 'Frontendmasters',
          desc: 'Premium tier video courses for any modern stack. Monthly or yearly subscription.',
          url: 'https://frontendmasters.com'
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
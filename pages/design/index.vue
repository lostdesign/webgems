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
        {
          title: 'Practical UI tips',
          desc: '7 Tips to boost your UI design.',
          url: 'https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886'
        },
        {
          title: 'UI tips',
          desc: 'Design tips by Steve Schoger',
          url: 'https://twitter.com/i/moments/880688233641848832'
        },
        {
          title: 'Colorhunt',
          desc: 'Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes',
          url: 'http://colorhunt.co/'
        },
        {
          title: 'Flatuicolorpicker',
          desc: 'Flatuicolorpicker is a project digging the Flat Color Picker which gives you the perfect colors for flat designs',
          url: 'http://www.flatuicolorpicker.com'
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

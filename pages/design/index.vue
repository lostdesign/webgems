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
        {
          title: 'awwwards',
          desc: 'The awards for design, creativity and innovation on the Internet. Get your inspiration here or even submit your own website!',
          url: 'https://awwwards.com'
        },
        {
          title: 'siteinspire',
          desc: 'siteInspire is a showcase of the finest web and interactive design.',
          url: 'https://www.siteinspire.com'
        },
        {
          title: 'ShapeFactory',
          desc: 'Simple design tools for everyone. Simply create a logo, pigment/color scheme, gradient or duetone style.',
          url: 'https://shapefactory.co'
        },
        {
          title: 'lapa.ninja',
          desc: 'The best resources for learning design.',
          url: 'https://www.lapa.ninja/learn/'
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

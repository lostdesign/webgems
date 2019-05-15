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
          title: 'UX/UI Designer Roadmap 2017',
          desc: 'Roadmap to becoming a UI/UX Designer in 2017',
          url: 'https://github.com/togiberlin/ui-ux-designer-roadmap'
        },
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
        {
          title: 'Typography Handbook',
          desc: 'A concise, referential guide on best web typographic practices.',
          url: 'http://typographyhandbook.com'
        },
        {
          title: 'Hyperpixel.io',
          desc: 'Discover the latest designs for your own inspiration from our curated list of landing pages.',
          url: 'https://hyperpixel.io/'
        },
        {
          title: 'sharpen.design',
          desc: 'Sharpen is where designers hone their craft - randomly generated design challenges.',
          url: 'https://sharpen.design/'
        },
        {
          title: 'Good UI',
          desc: 'A Good User Interface Is One That\'s Backed By Reproducible Evidence (A/B Tests)',
          url: 'https://goodui.org/'
        },
        {
          title: 'SVG ON THE WEB',
          desc: 'A Practical Guide',
          url: 'https://svgontheweb.com/'
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

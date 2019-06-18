<template lang="pug">
  div
    h1 Servers
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
          title: 'Netlify',
          desc: 'Free static hosting with privacy in mind!',
          url: 'https://netlify.com'
        },
        {
          title: 'Github Pages',
          desc: 'Free static hosting by Github.',
          url: 'https://pages.github.com'
        },
        {
          title: 'Heroku',
          desc: 'Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.',
          url: 'https://www.heroku.com/'
        },
        {
          title: 'Now',
          desc: 'Global Serverless Deployments. Now makes serverless application deployment easy. Don\'t spend time configuring the cloud. Just push your code.',
          url: 'https://zeit.co/now'
        },
        {
          title: 'Namecheap',
          desc: 'Domains for your projects',
          url: 'https://namecheap.com'
        },
        {
          title: 'Servers for hackers',
          desc: 'Tutorials on how to handle your servers.',
          url: 'https://serversforhackers.com/'
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

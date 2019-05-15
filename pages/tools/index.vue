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
        {
          title: 'Snippet generator',
          desc: 'Create your own snippets for VSCode, Sublime or Atom using this generator. No need to format the snippet yourself',
          url: 'https://snippet-generator.app/'
        },
        {
          title: 'gitignore.io',
          desc: 'Create usefull .gitignore files for your projects.',
          url: 'https://www.gitignore.io'
        },
        {
          title: 'Github',
          desc: 'GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 36 million developers.',
          url: 'https://github.com'
        },
        {
          title: 'NASA APIs',
          desc: 'Welcome to the NASA API portal. The objective of this site is to make NASA data, including imagery, eminently accessible to application developers. The api.nasa.gov catalog is growing.',
          url: 'https://api.nasa.gov'
        },
        {
          title: 'PokéAPI',
          desc: 'The RESTful Pokémon API',
          url: 'https://pokeapi.co'
        },
        {
          title: 'Reddit API .json',
          desc: 'Take a any subreddit you like and append ".json" to consume it as an API (https://reddit.com/r/cats.json).',
          url: 'https://www.reddit.com/.json'
        },
        {
          title: 'quicktype',
          desc: 'Generate types and serializers from JSON.',
          url: 'https://quicktype.io'
        },
        {
          title: 'NGINXconfig.io',
          desc: 'Quickly generate a NGINX config for your server.',
          url: 'https://nginxconfig.io/'
        },
        {
          title: 'Online tools',
          desc: 'Decode, encode and hash any string quickly.',
          url: 'https://emn178.github.io/online-tools'
        },
        {
          title: 'Favicon generator. For real.',
          desc: 'A favicon generator for all browsers and platforms.',
          url: 'https://realfavicongenerator.net'
        },
        {
          title: 'JSFiddle',
          desc: 'JSFiddle is for: Demos for docs, Bug reporting (test-case) for Github Issues, Live code collaboration, Code snippets hosting for free!',
          url: 'https://jsfiddle.net'
        },
        {
          title: 'Gifless',
          desc: 'Create emoji & text gifs in seconds',
          url: 'https://www.gifless.com/'
        },
        {
          title: 'Learn Git',
          desc: 'Become a git guru - a tutorial series by Atlassian.',
          url: 'https://www.atlassian.com/git/tutorials'
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



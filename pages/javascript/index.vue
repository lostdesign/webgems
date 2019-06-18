<template lang="pug">
  div
    h1 Javascript
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
          title: 'WarriorJS',
          desc: 'An exciting game of programming and Artificial Intelligence',
          url: 'https://warrior.js.org/'
        },
        {
          title: 'Javascript30',
          desc: 'Free video courses about javascript. Made by WesBos',
          url: 'https://javascript30.com'
        },
        {
          title: 'JS the right way',
          desc: 'This is a guide intended to introduce new developers to JavaScript and help experienced developers learn more about its best practices.',
          url: 'https://jstherightway.org'
        },
        {
          title: 'Learn vanilla js',
          desc: 'A vanilla JS roadmap, along with learning resources and project ideas to help you get started.',
          url: 'https://learnvanillajs.com/'
        },
        {
          title: 'Javascript Info',
          desc: 'How it\'s done now. From the basics to advanced topics with simple, but detailed explanations.',
          url: 'https://javascript.info/'
        },
        {
          title: '30 Seconds of Code',
          desc: 'A curated collection of useful JavaScript snippets that you can understand in 30 seconds or less.',
          url: 'https://30secondsofcode.org'
        },
        {
          title: 'JS Tips',
          desc: 'JS Tips is a collection of useful daily JavaScript tips that will allow you to improve your code writing.',
          url: 'https://www.jstips.co'
        },
        {
          title: 'YDKJS',
          desc: 'This is a free series of books diving deep into the core mechanisms of the JavaScript language. The first edition of the series is now complete.',
          url: 'https://github.com/getify/You-Dont-Know-JS'
        },
        {
          title: 'Eloquent Javascript 3rd Edition',
          desc: 'This is a book about javascript, programming, and the wonders of the digital. You can read it online or get a paperback copy of it.',
          url: 'http://eloquentjavascript.net'
        },
        {
          title: 'Learn javascript fast',
          desc: 'Welcome to learnjavascriptfast.com, a free online course designed to help you learn Javascript fast with hands-on project. Our aim is to equip you with enough knowledge to start coding your own Javascript pages immediately upon completion of this course.',
          url: 'https://learnjavascriptfast.com/'
        },
        {
          title: 'ECMAScript 6',
          desc: 'ES6 is a significant update to the language, and the first update to the language since ES5 was standardized in 2009.',
          url: 'https://github.com/lukehoban/es6features#readme'
        },
        {
          title: 'You might not need jquery',
          desc: 'jQuery and its cousins are great, and by all means use them if it makes it easier to develop your application. If you\'re developing a library on the other hand, please take a moment to consider if you actually need jQuery as a dependency.',
          url: 'http://youmightnotneedjquery.com'
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

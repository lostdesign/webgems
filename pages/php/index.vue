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
        {
          title: 'PHP for beginners',
          desc: 'We all start somewhere. When it comes to web development with PHP, well, your first stop is this series. Designed specifically and exclusively for beginners, here, you\'ll learn the fundamentals of PHP - all the way down to defining variables and arrays.',
          url: 'https://laracasts.com/series/php-for-beginners'
        },
        {
          title: 'Learn PHP in Y Minutes',
          desc: 'A quick short overview of PHP utilizing most of the spec.',
          url: 'https://learnxinyminutes.com/docs/php/'
        },
        {
          title: 'An online book for learning PHP',
          desc: 'PHP Apprentice is an online, open source book about the PHP programming language. PHP is one of the most popular platforms for building websites and web services.',
          url: 'https://phpapprentice.com/'
        },
        {
          title: 'PHP-FIG',
          desc: 'Moving PHP forward through collaboration and standards. Welcome to the PHP Framework Interop Group! We\'re a group of established PHP projects whose goal is to talk about commonalities between our projects and find ways we can work better together.',
          url: 'https://www.php-fig.org/'
        },
        {
          title: 'PHP Subreddit',
          desc: 'Ask questions about frameworks, try your hand at php golf and strike gold or simply show off your latest work.',
          url: 'https://reddit.com/r/php'
        },
        {
          title: '(The only proper) PDO tutorial',
          desc: 'There are many tutorials on PDO already, but unfortunately, most of them fail to explain the real benefits of PDO, or even promote rather bad practices. The only two exceptions are phptherightway.com and hashphp.org, but they miss a lot of important information. As a result, half of PDO\'s features remain in obscurity and are almost never used by PHP developers, who, as a result, are constantly trying to reinvent the wheel which already exists in PDO.',
          url: 'https://phpdelusions.net/pdo'
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

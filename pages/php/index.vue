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
        {
          title: 'Online PHP shell',
          desc: '3v4l.org (leetspeak for eval) is an online shell that allows you to run your code on my server. I compiled more than 200 different PHP versions (every version released since 4.3.0) plus HHVM for you to use.',
          url: 'https://3v4l.org/'
        },
        {
          title: 'Safe Password Hashing',
          desc: 'This section explains the reasons behind using hashing functions to secure passwords, as well as how to do so effectively.',
          url: 'https://www.php.net/manual/en/faq.passwords.php'
        },
        {
          title: '14 Tips',
          desc: '14 Tips to Write PHP Code that is Hard to Maintain and Upgrade',
          url: 'https://www.tomasvotruba.cz/blog/2018/11/26/14-tips-to-write-php-code-that-is-hard-to-maintain-and-upgrade/'
        },
        {
          title: 'Object Calisthenics',
          desc: 'Object Calisthenics are programming exercises, formalized as a set of 9 rules invented by Jeff Bay in his book The ThoughtWorks Anthology. The word Object is related to Object Oriented Programming. The word Calisthenics is derived from greek, and means exercises under the context of gymnastics.',
          url: 'https://williamdurand.fr/2013/06/03/object-calisthenics/'
        },
        {
          title: 'Your code sucks, let\'s fix it',
          desc: '134 Slides to help fix your code. Performance and testing are just one aspect of code, to really be successful your code needs to be readable, maintainable and generally easier to comprehend and work with.',
          url: 'https://www.slideshare.net/rdohms/your-code-sucks-lets-fix-it-15471808'
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

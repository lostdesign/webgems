<template lang="pug">
  div
    h1 Ruby
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
          title: 'AppSignal Blog',
          desc: 'Product updates and things we\'ve learned while building AppSignal.',
          url: 'https://blog.appsignal.com/'
        },
        {
          title: 'Drifting Ruby',
          desc: 'Product updates and things we\'ve learned while building AppSignal.',
          url: 'https://www.driftingruby.com/'
        },
        {
          title: 'GoRails Blog',
          desc: 'Learn about Ruby on Rails. The GoRails blog covers topics across all aspects of Ruby on Rails development.',
          url: 'https://gorails.com/blog/'
        },
        {
          title: 'Honeybadger Development Blog',
          desc: 'Honeybadger blog.',
          url: 'https://www.honeybadger.io/blog/'
        },
        {
        title: 'Reinteractive Articles',
          desc: 'Our expert team of designers and developers love what they do and enjoy sharing their knowledge with the world.',
          url: 'https://reinteractive.com/blog/'
        },
        {
          title: 'RailsCasts',
          desc: 'Short Ruby on Rails screencasts containing tips, tricks and tutorials. Great for both novice and experienced web developers.',
          url: 'http://railscasts.com/'
        },
        {
          title: 'Railsware Blog',
          desc: 'on product management, engineering, design, culture and many more...',
          url: 'https://railsware.com/blog/'
        },
        {
          title: 'RubyFlow',
          desc: 'Made a library? Written a blog post? Found a useful tutorial? Share it with the Ruby community here or just enjoy what everyone else has found!',
          url: 'http://www.rubyflow.com/'
        },
        {
          title: 'Ruby Inside',
          desc: 'The biggest Ruby and Rails blog since 2006 - tutorials, news, and lots more.',
          url: 'http://www.rubyinside.com/'
        },
        {
          title: 'Ruby Rogues Episodes',
          desc: 'A podcast by panel about Ruby and related technologies.',
          url: 'https://devchat.tv/ruby-rogues/'
        },
        {
          title: 'Thoughtbot Weekly Iteration',
          desc: 'The Weekly Iteration is our video series where we explore new frameworks and languages, dig in to advanced coding patterns, and share the techniques we use on projects to build robust and maintainable applications. We\'re currently on a break from recording new episodes, but be sure to check out the many videos we\'ve released previously.',
          url: 'https://thoughtbot.com/upcase/the-weekly-iteration/'
        },
        {
          title: 'Thoughtbot Web Articles',
          desc: 'Written by thoughtbot, experienced designers and developers who turn your idea into the right product.',
          url: 'https://thoughtbot.com/blog/web/'
        },
        {
          title: 'Victor Hazbun Blog',
          desc: 'Victor Hazbun is an instructor at Egghead.io. He also writes about Ruby, JS and other techs.',
          url: 'https://www.codementor.io/victor_hazbun/posts/'
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

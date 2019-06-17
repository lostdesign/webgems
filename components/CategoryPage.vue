<template lang="pug">
  div
    h1 {{ resources.title }}
    .cards
      template(v-for='resource in resources.resources')
        Card(:title='resource.title' :desc='resource.desc' :url='resource.url')
</template>

<script>
import Card from './Card'

export default {
  props: ["resources"],
  components: {
    Card
  },
}
</script>


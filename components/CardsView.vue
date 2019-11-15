<template lang="pug">
  .cards
    Card(v-for='resource in category.resources' :resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
</template>

<script>
import Card from './Card'

export default {
  components: { Card },
  props: ['category', 'createCopyUrl', 'activeCard'],
}
</script>

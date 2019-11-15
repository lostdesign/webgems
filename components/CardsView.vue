<template lang="pug">
  .cards
    Card(v-for='resource in resources' :resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
</template>

<script>
import Card from './Card'

export default {
  components: { Card },
  props: ['resources', 'createCopyUrl', 'activeCard'],
}
</script>

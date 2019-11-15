<template lang="pug">
  table
    TableRow(v-for='resource in category.resources' :resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
</template>

<script>
import TableRow from '../components/TableRow'

export default {
  components: { TableRow },
  props: ['category', 'createCopyUrl', 'activeCard'],
}
</script>

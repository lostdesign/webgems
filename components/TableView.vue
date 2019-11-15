<template lang="pug">
  table
    TableRow(v-for='resource in resources' :resource='resource' :key='resource.title' :createCopyUrl="createCopyUrl" :isActive='activeCard === resource.cleanTitle')
</template>

<script>
import TableRow from '../components/TableRow'

export default {
  components: { TableRow },
  props: ['resources', 'createCopyUrl', 'activeCard'],
}
</script>

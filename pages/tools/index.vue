<template lang="pug">
  CategoryPage(:resources="resources")
</template>

<script>
import CategoryPage from '../../components/CategoryPage'
import store from '../../store.json'

export default {
  data() {
    return {
      resources: store.find(x => x.title.toLowerCase() === 'tools')
    }
  },
  components: {
    CategoryPage
  }
}
</script>

<style lang="scss" scoped>
</style>

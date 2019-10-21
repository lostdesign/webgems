<template lang="pug">
  input.search(v-model="searchInput" type="text" placeholder="Search (does not work currently, sorry)")
</template>

<script>
import * as R from 'ramda'

export default {
  data() {
    return {
      searchInput: '',
    }
  },
  watch: {
    searchInput(e) {
      const isTag = R.startsWith('#')
      const removeFirstChar = x => R.splitAt(1, x)[1]

      const words = R.split(' ', e)
      const tags = R.filter(isTag, words)
      const titles = R.filter(R.compose(R.not, isTag), words)
      console.group()
      console.log("words:", words)
      console.log("tags:", tags)
      console.log("titles:", titles)
      console.log(this.$store.getters['data/findByName'](titles))
      console.log(this.$store.getters['data/findByTags'](R.map(removeFirstChar, tags)))
      console.groupEnd()
    },
  },
  methods: {
    updateSearchResults(e) {
      console.log(e)
    },
  },
}
</script>

<style lang="scss">
input {
  padding: .5rem 1.5rem .5rem 1.5rem;
  border-radius: .3rem;
  background: #eee;
  font-size:12px;

  &:focus {
    outline:none;
  }
}
</style>

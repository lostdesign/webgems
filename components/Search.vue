<template lang="pug">
  input.search(v-model="searchInput" type="text" placeholder="Search (does not work currently, sorry)")
</template>

<script>
import * as R from 'ramda'
import { isNotEmpty } from '../utils/pure'

export default {
  data() {
    return {
      searchInput: '',
    }
  },
  watch: {
    searchInput(input) {
      const isTag = R.startsWith('#')
      const removeFirstChar = R.compose(
        R.join(''),
        R.adjust(0, () => '')
      )

      const words = R.filter(isNotEmpty, R.split(' ', input))
      const tags = R.filter(isTag, words)
      const titles = R.filter(R.compose(R.not, isTag), words)
      console.group()
      console.log('words:', titles)
      console.log('tags:', tags)
      console.log('returned by words search:', this.$store.getters['data/findByName'](titles))
      console.log('returned by tags search:', this.$store.getters['data/findByTags'](R.map(removeFirstChar, tags)))
      console.groupEnd()
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

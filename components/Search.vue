<template lang="pug">
  input.search(v-model="searchInput" @keydown.enter="onEnter" type="text" placeholder="Search")
</template>

<script>
import * as R from 'ramda'
import { isNotEmpty } from '../utils/pure'

export default {
  data() {
    return {
      searchInput: '',
      searchPath: '/search',
    }
  },
  watch: {
    searchInput(input) {
      const words = R.filter(isNotEmpty, R.split(' ', input))
      const tags = R.filter(this.isTag, words)
      const titles = R.filter(R.compose(R.not, this.isTag), words)

      const searchParams = new URLSearchParams()
      if (isNotEmpty(titles))
        searchParams.append('keywords', titles)
      if (isNotEmpty(tags))
        searchParams.append('tags', R.map(this.removeFirstChar, tags))

      this.$router.push(this.searchPath + '?' + searchParams.toString())
    },
  },
  mounted() {
    let keywords = this.$route.query.keywords || ''
    keywords = keywords.split(',').join(' ')

    let tags = this.$route.query.tags || ''
    tags = R.filter(this.isTag, tags.split(',')).map(tag => `#${tag}`).join(' ')

    this.searchInput = `${tags} ${keywords}`.trim()
  },
  methods: {
    // isTag :: String -> Bool
    isTag: R.startsWith('#'),

    // removeFirstChar :: String -> String
    removeFirstChar: R.compose(
      R.join(''),
      R.adjust(0, () => ''),
    ),
    onEnter() {
      const searchParams = new URLSearchParams({ ...this.$route.query, enter: true })
      this.$router.push(this.searchPath + '?' + searchParams.toString())
    },
  },
}
</script>

<style lang="scss">
input {
  font-family: "Poppins";
  padding: .5rem 1.5rem .5rem 1.5rem;
  border-radius: .3rem;
  border: none;
  background: #2E2E40;
  font-size: 14px;
  color: #fff;

  &:focus {
    outline:none;
  }
}
</style>

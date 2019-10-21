<template lang="pug">
  input.search(v-model="searchInput" type="text" placeholder="Search (does not work currently, sorry)")
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    }
  },
  watch: {
    searchInput(e) {
      console.log(this.$store.getters['data/findByTags']([e]))
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

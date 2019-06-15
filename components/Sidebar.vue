<template lang="pug">
  aside.nav
    .sidebar
      template(v-for='entry in menuEntries')
        nuxt-link(:to='entry.slug') {{ entry.title }}
</template>

<script>
import store from '../store.json'

export default {
  data() {
    return {
      menuEntries: [{ slug: '', title: '' }],
    }
  },
  created() {
    this.menuEntries = store.map(({ title, slug }) => ({
      slug: `/categories/${slug}`,
      title
    }))
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  display:grid;
  grid-template-columns: 1fr;
  font-size: 14px;

  a {
    padding: .5rem 1rem .5rem 1rem;
    font-weight: 600;
  }
}

@media (max-width: 400px) {
  .sidebar {
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem,1fr));
  }
}
</style>

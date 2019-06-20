<template lang="pug">
  aside.nav
    .sidebar
      template(v-for='category in categories')
        //- nuxt-link(:to='$i18n.path(category.slug)') {{ category.title }}
        nuxt-link(:to='category.slug') {{ category.title }}
</template>

<script>
import store from '../store.json'

export default {
  data() {
    return {
      categories: [{ slug: '', title: '' }],
    }
  },
  created() {
    this.categories = store.map(({ title, slug }) => ({ title, slug }))
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: grid;
  grid-template-columns: 1fr;
  font-size: 14px;

  a {
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-weight: 600;
  }
}

@media (max-width: 400px) {
  .sidebar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  }
}
</style>

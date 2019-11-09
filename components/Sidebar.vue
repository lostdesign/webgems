<template lang="pug">
  aside.nav
    .sidebar
      template(v-for='category in categories')
        //- nuxt-link(:to='$i18n.path(category.slug)') {{ category.title }}
        nuxt-link(:to='category.slug') {{ category.title }}
      hr
      nuxt-link(to='/privacy-policy') Privacy Policy
      nuxt-link(to='/cookie-policy') Cookie Policy
      nuxt-link(to='/imprint') Imprint
      hr
      div(class="toggleWrapper" @click="toggleCardsVisible")
        div(class="viewToggle" :class="{active: areCardsVisible}") Cards
        div(class="viewToggle" :class="{active: !areCardsVisible}") Table
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      categories: [{ slug: '', title: '' }],
    }
  },
  computed: {
    areCardsVisible() {
      return this.$store.getters['Sidebar/areCardsVisible']
    },
  },
  created() {
    this.categories = this.$store.getters['data/resources'].map(({ title, slug }) => ({ title, slug }))
  },
  methods: {
    ...mapMutations({
      toggleCardsVisible: 'Sidebar/toggleCardsVisible',
    }),
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: sticky;
  top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  font-size: 14px;

  a {
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-weight: 600;
    transition-duration: 0.2s;
    transition-property: background-color,color;
    &:hover, &.nuxt-link-exact-active {
      background-color: #08e5ff;
      color: #000;
      text-decoration: none;
    }
  }
  div {
    cursor: pointer;
  }
  .toggleWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: min-content;
    border: 1px;
    border-color: #08e5ff;
    border-style: solid;
    border-radius: 0.25rem;
    overflow: hidden;
    margin: 1rem auto;
  }
  .viewToggle {
    padding: 0 0.2rem;
    color: #008190;
  }
  .active {
    background-color: #08e5ff;
    color: #232331;
  }
  hr {
    width: 80%;
    border-color: #08e5ff;
  }
}

@media (max-width: 400px) {
  .sidebar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  }
}
</style>

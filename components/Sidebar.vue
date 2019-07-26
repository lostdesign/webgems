<template lang="pug">
  aside.nav
    .sidebar
      template(v-for='category in categories')
        nuxt-link(:to='category.slug') {{ category.title }}
      div(@click="toggleCardsShown")
        div(class="viewToggle" :class="{active: cardsShown}") Cards
        div(class="viewToggle" :class="{active: !cardsShown}") Table
</template>

<script>
import store from "../store.json";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      categories: [{ slug: "", title: "" }]
    };
  },
  computed: {
    cardsShown() {
      return this.$store.state.Sidebar.cardsShown;
    }
  },
  created() {
    this.categories = store.map(({ title, slug }) => ({ title, slug }));
  },
  methods: {
    ...mapMutations({
      toggleCardsShown: "Sidebar/toggleCardsShown"
    })
  }
};
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

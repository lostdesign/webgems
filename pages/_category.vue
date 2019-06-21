<template lang="pug">
  div
    transition(name="fade-title" @after-enter="afterEnter")
      h1(v-if="showTitle") {{ category.title }}
    transition(name="fade-card" v-on:before-leave="beforeLeave" mode="out-in")
      .cards(v-if="showCards")
        template(v-for='resource in category.resources')
          Card(:title='resource.title' :desc='resource.desc' :url='resource.url')
</template>

<script>
import store from '../store.json'
import Card from '../components/Card'

export default {
  data () {
    return {
      categoryRouteTitle: this.$route.params.category,
      categories: store,
      showTitle: false,
      showCards: false,
    }
  },
  computed: {
    category() {      
      return this.categories.find(category => category.title.toLowerCase() === this.categoryRouteTitle.toLowerCase())
    }
  },
  components: { Card },
  methods: {
    beforeLeave: function (el) {
      this.showCards = false;
    },
    afterEnter: function(el) {
      this.showCards = true;
    }
  },
  mounted() {
    this.showTitle = true;
  }
}
</script>

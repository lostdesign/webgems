<template lang="pug">
  aside.sidebar
    nuxt-link(to="/general") General
    nuxt-link(to="/html") HTML
    nuxt-link(to="/css") CSS
    nuxt-link(to="/javascript") Javascript
    nuxt-link(to="/php") PHP
    nuxt-link(to="/design") Designs
    nuxt-link(to="/servers") Servers
    nuxt-link(to="/tools") Tools
    nuxt-link(to="/daily") Daily
    small And many more to come :)
</template>


<style lang="scss" scoped>
.sidebar {
  padding-left: .5rem;
  font-size: 14px;
  margin: .5rem;

  a {
    display: block;
    padding: 0 1rem 1rem 1rem;
    text-decoration: none;
  }
}
</style>

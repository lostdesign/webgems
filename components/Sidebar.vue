<template lang="pug">
  aside.nav
    .sidebar
      nuxt-link(to="/general") General
      nuxt-link(to="/html") HTML
      nuxt-link(to="/css") CSS
      nuxt-link(to="/javascript") Javascript
      nuxt-link(to="/ruby") Ruby
      nuxt-link(to="/php") PHP
      nuxt-link(to="/python") Python
      nuxt-link(to="/design") Design
      nuxt-link(to="/frontend") Frontend
      nuxt-link(to="/fullstack") Fullstack
      nuxt-link(to="/servers") Server
      nuxt-link(to="/utility") Utility
      nuxt-link(to="/daily") Daily
      nuxt-link(to="/communities") Communities
</template>


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

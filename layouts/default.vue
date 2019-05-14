<template lang="pug">
  .layout
    Logo
    Search
    Sidebar
    nuxt.content
</template>

<script>
import Logo from '../components/Logo'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'

export default {
  components: {
    Logo,
    Search,
    Sidebar
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:400,900');

body {
  margin: .5rem;
}

html {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #22292F;
}

a {
  color: #3490DC;
  text-decoration: none;
  overflow-wrap: break-word;
}

.layout {
  display: grid;
  grid-template-columns: 15vw auto;
  grid-gap: 1rem;
  grid-template-areas:
    'logo search'
    'sidebar content';
}

.logo {
  grid-area: logo;
}

.search {
  grid-area: search;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.cards {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
  grid-gap: 2rem;
}


@media (max-width: 600px) {
  .layout {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1rem;
    margin-top: 1rem;
    grid-template-areas:
      'logo'
      'search'
      'sidebar'
      'content';
  }
}
</style>

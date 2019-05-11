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
  margin: 0;
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
}

.layout {
  display: grid;
  grid-template-columns: 100px 100px auto;
  grid-gap: 1rem;
  margin-top: 1rem;
  grid-template-areas:
    'logo logo search'
    '. . .'
    'sidebar sidebar content';
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
  width: 90%;
}

.cards {
  display:grid;
  grid-template-columns: repeat(4, 20%);
  grid-gap: 3rem;
}

@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
 {

  .cards {
    display:grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
  .layout {
    grid-template-columns: 50px 50px auto;
    grid-template-areas:
    'logo logo search'
    '. . .'
    'sidebar sidebar content';
  }
}
</style>

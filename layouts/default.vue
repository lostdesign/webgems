<template lang="pug">
  .layout
    Github
    Logo
    Sidebar
    no-ssr
      template(v-if="showNotice")
        .cookie
          p This site uses cookies, please read our&nbsp;
            nuxt-link.highlighted.highlighted__inverted(to="privacy-policy") Privacy policy.
            button(@click.preventDefault="hideCookieNotice") X
    nuxt.content

</template>

<script>
import Github from '../components/Github'
import Logo from '../components/Logo'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'

export default {
  components: {
    Github,
    Logo,
    Search,
    Sidebar,
  },
  data() {
    return {
      showNotice: false,
    }
  },
  beforeMount() {
    this.checkCookieNoticeHidden()
  },
  methods: {
    hideCookieNotice() {
      if(typeof(Storage) !== 'undefined'){
        localStorage.setItem('cookieNoticeHidden', true)
        this.showNotice = false
      }
    },
    checkCookieNoticeHidden() {
      if(typeof(Storage) !== 'undefined'){
        let cookieNotice = localStorage.getItem('cookieNoticeHidden')
        if(cookieNotice) {
          this.showNotice = false
        } else {
          this.showNotice = true
        }
      }
    },
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600,900');

body {
  margin: 1rem;
  background: #232331;
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
  // color: #22292F;
}

a {
  color: #08e5ff;
  text-decoration: none;
  overflow-wrap: break-word;

  &:hover {
    color: #008190;
  }
}

.nuxt-link-active {
  color: white;
  text-decoration: underline;
}

h1, h2, p, ol, i, small {
  color: white;
}

h1 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.layout {
  display: grid;
  grid-template-columns: fit-content(200px) auto;
  grid-gap: 1rem;
  grid-template-areas:
    'logo .'
    'sidebar content';
}

.logo {
  grid-area: logo;
}

.search {
  grid-area: search;
}

.nav {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.cards {
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem,auto));
  grid-gap: 1rem;
}

// Fade in title and cards and rows
.fade-title {
  &-enter {
    opacity: 0;

    &-to {
      opacity: 1;
    }

    &-active {
       transition: opacity .1s ease-in-out;
    }
  }
}

.fade-card {
  &-enter {
    opacity: 0;

    &-to {
      opacity: 1;
    }

    &-active {
       transition: opacity .1s ease-in-out;
    }
  }
}


@media (max-width: 400px) {
  .layout {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1rem;
    margin-top: 1rem;
    grid-template-areas:
      'logo'
      'sidebar'
      'content';
  }
}

.highlighted {
  text-decoration: none;
  background-color: #08e5ff;
  color: #212121;
  padding: 0 5px;
  border-radius: .1rem;

  &:hover {
    background-color: #008190;
    color: white;
  }

  &__inverted{
    background-color: #232331;
    color: #08e5ff;
    border-radius: .2rem;
  }
}

.cookie {
  position: fixed;
  margin: 1rem;
  bottom: 0;
  left: 0;
  background-color: #08e5ff;
  padding: 0 1rem;
  border-radius: .3rem;

  p {
    color: #212121;
    font-size: 12px;
  }

  button {
    background: none;
    border: none;
    margin-left: .8rem;
  }
}


// #232331 dark bg
// #2D3748 ligher cards
// #ff3e35 or #08e5ff links
</style>


<style lang="scss">
::-webkit {
  &-scrollbar{
    width: 5px;
    height: 5px;

    &-thumb{
      background: #08e5ff;
    }

    &-track{
      background:#232331;
    }
  }
  &-resizer,
  &-scrollbar-corner {
    background: #232331;
  }
}

</style>
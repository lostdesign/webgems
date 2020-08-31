<template lang="pug">
  nav(class="bg-themeblue lg:bg-transparent py-4 md:py-6 lg:py-10" :class="[nav === true ? 'pb-0 md:pb-0' : '']")
    div(class="container mx-auto px-4 lg:px-8")
      div(class="flex justify-end items-center")
        div(class="flex lg:hidden flex-col items-center mr-auto")
          div
            Logo
          div
            p(class="text-white font-serif font-medium lg:text-lg") webgems.io
        div(class="hidden md:block mr-8")
          input(type="search" placeholder="Search" class="block w-full max-w-lg appearance-none bg-themeblue-400 lg:bg-white font-medium text-white lg:text-gray-600 leading-tight rounded-xl focus:outline-none lg:focus:shadow-outline border-2 lg:border border-solid border-themeblue-300 lg:border-gray-300 placeholder-white lg:placeholder-gray-600 py-2 px-6")
        div(class="mr-8 lg:mr-0")
          a(
            class="text-white lg:text-black hover:text-white lg:hover:text-black  focus:text-white lg:focus:text-black hover:text-opacity-75 focus:text-opacity-75"
            target="_blank"
            href="https://github.com/webgems/webgems"
          )
            GitHub
        div(class="lg:hidden py-4")
          button(class="bg-themeblue-400 border border-themeblue-300  text-white rounded-sm py-2 px-3 focus:outline-none focus:shadow-outline" @click="nav = !nav")
              svg(class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg")
                title Menu
                path(d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z")
    div(class="hidden lg:hidden bg-themeblue-600 mt-5" :class="[nav === true ? 'show' : '']")
      div(class="container mx-auto px-4 lg:px-8")
        ul.flex.flex-wrap.py-6
          li(
            class="w-full md:w-1/3"
            v-for="(topic, index) in topics" :key="index"
          )
            nuxt-link(class="font-medium leading-9 text-white hover:text-white focus:text-white" :to="topic.path") {{ topic.label }}
</template>

<script>
import GitHub from '@/assets/images/logo-github.svg?inline';

export default {
  components: { GitHub },
  data() {
    return {
      nav: false,
      topics: [
        { label: "Accessibility", path: '/gems/accessibility' },
        { label: "CSS", path: '/gems/accessibility' },
        { label: "Daily", path: '/gems/accessibility' },
        { label: "Design", path: '/gems/accessibility' },
        { label: "Frontend", path: '/gems/accessibility' },
        { label: "Fullstack", path: '/gems/accessibility' },
        { label: "General", path: '/gems/accessibility' },
        { label: "HTML", path: '/gems/accessibility' },
        { label: "Icons", path: '/gems/accessibility' },
        { label: "Javascript", path: '/gems/accessibility' },
        { label: "PHP", path: '/gems/accessibility' },
        { label: "Podcasts", path: '/gems/accessibility' },
        { label: "Python", path: '/gems/accessibility' },
        { label: "Ruby", path: '/gems/accessibility' },
        { label: "Server", path: '/gems/accessibility' },
        { label: "Utility", path: '/gems/accessibility' },
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.show {
  display: block;
  @screen lg {
    display: none;
  }
}
</style>

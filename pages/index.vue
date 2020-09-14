<template lang="pug">
  div
    div(class="hidden md:block absolute -z-1" style="margin-top: -176px")
      BgTop.bg-top

    header(class="py-10 md:py-16 md:pt-16 xl:py-16 xl:pb-32")
      div(class="container mx-auto px-4 lg:px-8")
        h1(class="text-center text-white text-5xl md:text-6xl mb-6 xl:mb-10") webgems
        .mb-10
          input(type="search" placeholder="Search" class="block w-full md:max-w-md md:mx-auto lg:max-w-lg xl:max-w-2xl appearance-none bg-themeblue-400 font-medium text-white text-lg leading-tight rounded-xl shadow-lg focus:outline-none border-2 border-solid border-themeblue-300 placeholder-white py-2 md:py-3 px-3 md:px-6 xl:px-12")
        div(class="md:text-center")
          template(v-for="(topic, index) in topics")
            button(
              v-if="topic.special"
              class="inline-block transform scale-100 hover:scale-95 transition-transform duration-75 ease-linear bg-white rounded-xl shadow-lg font-medium text-themeblue-200 text-xs md:text-sm lg:text-base hover:bg-opacity-95 focus:bg-opacity-95 border-2 border-white focus:outline-none focus:shadow-outline leading-tight select-none align-middle whitespace-no-wrap px-3 md:px-4 xl:px-5 py-2 cursor-pointer mr-4 md:mr-6 lg:mr-8 mb-4 md:mb-6 lg:mb-6 xl:mb-8 last:mr-0"
              :key="`button-${index}`"
              @click="$router.push({ path: topic.path })"
            ) {{ topic.label }}
            button(
              v-else
              class="inline-block transform scale-100 hover:scale-95 transition-transform duration-75 ease-linear bg-themeblue-600 rounded-xl shadow-lg font-medium text-white text-xs md:text-sm lg:text-base hover:bg-opacity-75 focus:bg-opacity-75 border-2 border-themeblue-200 focus:outline-none focus:shadow-outline leading-tight select-none align-middle whitespace-no-wrap px-3 md:px-4 xl:px-5 py-2 cursor-pointer mr-4 md:mr-6 lg:mr-8 mb-4 md:mb-6 lg:mb-6 xl:mb-8 last:mr-0"
              :key="`special-${index}`"
              @click="$router.push({ path: topic.path })"
            ) {{ topic.label }}

    section(class="py-10 lg:py-12 xl:py-20")
      div(class="container mx-auto px-4 lg:px-8")
        div.flex.flex-wrap.-mx-4
          div(class="w-full lg:w-1/2 px-4 mb-8 lg:mb-12 xl:mb-20 last:mb-0")
            h2(class="text-2xl lg:text-3xl text-white") What is 💎 webgems?
            p.text-gray-400 Webgems is a goto place for devs and designers to find new resources and more. As a beginner, it's sometimes not easy to find what you need since you don't know where to look for what.
          div(class="w-full lg:w-1/2 px-4 mb-8 lg:mb-12 xl:mb-20 last:mb-0")
            h2(class="text-2xl lg:text-3xl text-white") Why we made this project?
            p.text-gray-400 We created this project to have the most common and best resources for beginners and veterans in one place — kind of like a bookmarks list for devs and designers, containing only the best gems out there.
          div(class="w-full lg:w-1/2 px-4 mb-8 lg:mb-12 xl:mb-20 last:mb-0")
            h2(class="text-2xl lg:text-3xl text-white") How to contirbute?
            p.text-gray-400 If you want to add your gem, go ahead and open a pull request on GitHub.
          div(class="w-full lg:w-1/2 px-4 mb-8 lg:mb-12 xl:mb-20 last:mb-0")
            h2(class="text-2xl lg:text-3xl text-white") How to help?
            p.text-gray-400 By the way, this project lives by getting shared; if you find this worthy, please share it with others.

    section(class="relative py-10 pb-16 md:py-20 lg:py-24 xl:py-32 xl:pb-40")
      div(class="container mx-auto px-4 lg:px-8")
        h2(class="font-semibold text-white md:text-center lg:text-5xl xl:text-6xl md:mb-6") Fork us on GitHub
        div(class="md:text-center")
          a(
            class="inline-block transform scale-100 hover:scale-95 transition-transform duration-75 ease-linear bg-themeblue-600 rounded-xl shadow-lg font-medium md:font-bold text-white hover:text-white focus:text-white hover:no-underline md:uppercase text-xs md:text-sm lg:text-base hover:bg-opacity-75 focus:bg-opacity-75 border-2 border-themeblue-200 focus:outline-none focus:shadow-outline leading-tight select-none align-middle whitespace-no-wrap px-3 md:px-4 lg:px-6 xl:px-8 py-2 lg:py-3 cursor-pointer mr-4 md:mr-6 lg:mr-8 mb-4 md:mb-6 lg:mb-6 xl:mb-8 last:mr-0"
            href="https://github.com/webgems/webgems/blob/dev/CONTRIBUTING.md"
          )
            div.flex.items-center
              div
                span Post A webgem
              div
                GitHub(class="hidden md:inline-block h-5 w-5 lg:h-6 lg:w-6 ml-2")
          button(class="inline-block transform scale-100 hover:scale-95 transition-transform duration-75 ease-linear bg-themeblue-600 rounded-xl shadow-lg font-medium md:font-bold text-white md:uppercase text-xs md:text-sm lg:text-base hover:bg-opacity-75 focus:bg-opacity-75 border-2 border-themeblue-200 focus:outline-none focus:shadow-outline leading-tight select-none align-middle whitespace-no-wrap px-3 md:px-4 lg:px-6 xl:px-8 py-2 lg:py-3 cursor-pointer mr-4 md:mr-6 lg:mr-8 mb-4 md:mb-6 lg:mb-6 xl:mb-8 last:mr-0")
            .flex.items-center
              div
                span Spread the words
              div
                Twitter(class="hidden md:inline-block h-5 w-5 lg:h-6 lg:w-6 ml-2")

      div(class="hidden md:block absolute bottom-0 right-0 -z-1")
        BgBottom.bg-bottom
</template>

<script>
import BgTop from '@/assets/images/home-bg-1.svg?inline';
import GitHub from '@/assets/images/logo-github.svg?inline';
import Twitter from '@/assets/images/logo-twitter.svg?inline';
import BgBottom from '@/assets/images/home-bg-2.svg?inline';

export default {
  components: { BgTop, GitHub, Twitter, BgBottom },
  data() {
    return {
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
        { label: "All", path: '/gems/accessibility', special: true },
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.bg-top {
  width: 606px;
  @media (min-width: 1024px) {
    width: 700px;
  }
  @media (min-width: 1440px) {
    width: 900px;
  }
  @media (min-width: 1800px) {
    width: 1000px;
  }
}
.bg-bottom {
  width: 606px;
  @media (min-width: 1024px) {
    width: 700px;
  }
  @media (min-width: 1440px) {
    width: 1000px;
  }
  @media (min-width: 1800px) {
    width: 1200px;
  }
}
h1 {
  @screen lg {
    font-size: 6rem;
  }
  @screen xl {
    font-size: 7rem;
  }
}
</style>

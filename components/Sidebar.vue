<template lang="pug">
  aside(class="hidden lg:block sticky top-0 w-aside h-screen overflow-y-auto bg-themeblue py-4 md:py-6 lg:py-10")
    div(class="px-4 lg:px-8")
      div(class="flex justify-center items-center mb-8")
        div(class="flex flex-col items-center")
          div
            Logo
          div
            p(class="text-white font-serif font-medium lg:text-lg") webgems.io
      div(class="flex flex-col justify-center items-center")
        div
          .mb-4
            p.text-gray-400.uppercase.font-bold Topics
          div
            ul
              li(v-for="(topic, index) in topics" :key="index")
                nuxt-link(class="font-medium leading-8 text-white hover:text-white focus:text-white" :to="topic.path") {{ topic.label }}
</template>

<script>
export default {
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
      ]
    }
  }
}
</script>
